import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public items: any[] = [];

  constructor(private artworkService: ArtworksService) {}
  ngOnInit(): void {
    this.artworkService.getArtworkds().subscribe((el: any) => {
      this.items = el.data;
      console.log(el);
    });
  }
}
