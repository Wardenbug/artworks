import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatGridListModule, NgxMasonryModule],
  exports: [MatCardModule, MatGridListModule, NgxMasonryModule],
})
export class SharedModule {}
