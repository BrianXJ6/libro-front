import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { PageListComponent } from './list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, MaterialModule, RouterLink],
})
export class ListModule {}
