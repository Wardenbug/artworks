import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  public pagination: Pagination | null = null;

  constructor(private artworkService: ArtworksService) {}
  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe((el: any) => {
      this.pagination = el.pagination;
      this.items = el.data;
      console.log(el);
    });
  }

  submitForm() {
    console.log('submit form');
    console.log(this.searchForm.value);

    this.artworkService
      .getArtworksBySearch({ q: this.searchForm.value.query })
      .subscribe((el: any) => {
        console.log(el);
        this.pagination = el.pagination;
        this.items = el.data;
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
        console.log(el);
      });
    console.log(page);
  }
}
