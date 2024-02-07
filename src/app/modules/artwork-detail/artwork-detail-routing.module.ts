import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkDetailComponent } from './pages/artwork-detail/artwork-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtworkDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtworkDetailRoutingModule {}
