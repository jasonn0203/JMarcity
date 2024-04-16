import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { VndCurrencyPipe } from './pipes/vnd-currency/vnd-currency.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    BannerComponent,
    VndCurrencyPipe,
  ],

  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    BannerComponent,
    VndCurrencyPipe,
  ],
})
export class SharedModule {}
