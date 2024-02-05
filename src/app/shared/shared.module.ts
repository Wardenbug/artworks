import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMasonryModule } from 'ngx-masonry';
import { MatIconModule } from '@angular/material/icon';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    NgxMasonryModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    NgxMasonryModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    PaginationComponent,
    MatButtonModule,
  ],
})
export class SharedModule {}
