import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCardComponent } from './components/art-card/art-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MainPageComponent } from './pages/main/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArtCardComponent, MainPageComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
