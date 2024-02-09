import { Component, Input } from '@angular/core';
import { ArtworkItem } from '../../interfaces/artwork-item';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss'],
})
export class ArtCardComponent {
  @Input('item') item: ArtworkItem | null = null;
}
