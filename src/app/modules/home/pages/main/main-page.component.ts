import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagination } from '../../interfaces/pagination';
import { ArtworkItem } from '../../interfaces/artwork-item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public items: ArtworkItem[] = [];

  public searchForm = new FormGroup({
    query: new FormControl<string>(''),
  });

  private page: number = 1;
  private query: string = '';

  public pagination: Pagination | null = null;

  constructor(
    private readonly artworkService: ArtworksService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
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
          .getArtworksBySearch({ q: params.q || '', page: params.page || 1 })
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

  public submitForm(): void {
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

  private updateQueryParams(): void {
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

  public changePage(page: number): void {
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
