import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';

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

  public pagination: Pagination | null = null;

  constructor(private artworkService: ArtworksService) {}
  ngOnInit(): void {
    this.artworkService.getArtworkds().subscribe((el: any) => {
      this.pagination = el.pagination;
      this.items = el.data;
      console.log(el);
    });
  }

  public changePage(page: number) {
    this.artworkService
      .getArtworkds({
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
