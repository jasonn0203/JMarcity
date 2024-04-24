import { VndCurrencyPipe } from './../shared/pipes/vnd-currency/vnd-currency.pipe';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [],
})
export class CoreModule {}
