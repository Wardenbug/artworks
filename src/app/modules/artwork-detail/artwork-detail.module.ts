import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtworkDetailRoutingModule } from './artwork-detail-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ArtworkDetailRoutingModule
  ]
})
export class ArtworkDetailModule { }
