import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDetailComponent } from './detail.component';
import { MaterialModule } from '../../shared/modules/material/material.module';

@NgModule({
  declarations: [PageDetailComponent],
  imports: [CommonModule, MaterialModule],
})
export class DetailModule {}
