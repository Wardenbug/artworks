import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Pagination {
  current_page: number;
  limit: number;
  next_url: string;
  offset: number;
  total: number;
  total_pages: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public items: any[] = [];

  public searchForm = new FormGroup({
    query: new FormControl<string>(''),
  });

  private page: number = 1;
  private query: string = '';

  public pagination: Pagination | null = null;

  constructor(
    private artworkService: ArtworksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params.q, params.page);
      if (!params.q && params.page) {
        this.artworkService
          .getArtworks({ page: params.page })
          .subscribe((el: any) => {
            this.pagination = el.pagination;
            this.items = el.data;
            this.page = params.page;
          });
      } else {
        this.artworkService
          .getArtworksBySearch({ q: params.q, page: params.page })
          .subscribe((el: any) => {
            this.pagination = el.pagination;
            this.items = el.data;
            this.query = params.q;
            this.page = params.page;
            this.updateQueryParams();
          });
      }
    });
  }

  submitForm() {
    this.artworkService
      .getArtworksBySearch({ q: this.searchForm.value.query })
      .subscribe((el: any) => {
        this.pagination = el.pagination;
        this.items = el.data;
        this.query = String(this.searchForm.value.query);
        this.page = 1;
        this.updateQueryParams();
      });
  }

  private updateQueryParams() {
    const queryParams = { page: this.page, q: this.query };

    const mergedQueryParams = {
      ...this.route.snapshot.queryParams,
      ...queryParams,
    };

    this.router.navigate([], {
      queryParams: mergedQueryParams,
      queryParamsHandling: 'merge',
    });
  }

  public changePage(page: number) {
    this.artworkService
      .getArtworks({
        page: page,
        limit: this.pagination?.limit,
      })
      .subscribe((el: any) => {
        this.pagination = el.pagination;
        this.items = el.data;
        this.page = page;
        this.updateQueryParams();
      });
  }
}
