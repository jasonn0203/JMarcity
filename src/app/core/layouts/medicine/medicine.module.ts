import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [MedicineDetailComponent],
  imports: [CommonModule, MedicineRoutingModule, SharedModule],
})
export class MedicineModule {}
