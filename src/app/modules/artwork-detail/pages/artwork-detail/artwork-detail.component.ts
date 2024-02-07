import { Component, Input, OnInit } from '@angular/core';
import { ArtworksService } from '../../services/artwork.service';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss'],
})
export class ArtworkDetailComponent implements OnInit {

  @Input() id = '';

  item: any = {};
  
  /**
   *
   */
  constructor(
    private readonly artworksService: ArtworksService,
  ) {}

  ngOnInit(): void {
    this.artworksService.getArtworkById(this.id).subscribe((response: any) => {
      this.item = response.data;
      console.log(response.data);
    });
  }
}
