import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { VndCurrencyPipe } from './pipes/vnd-currency/vnd-currency.pipe';
import { MedCardComponent } from './components/med-card/med-card.component';
import { MedCategoriesComponent } from './components/med-categories/med-categories.component';
import UserOptionsComponent from './components/user-options/user-options.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    BannerComponent,
    VndCurrencyPipe,
    MedCardComponent,
    MedCategoriesComponent,
    UserOptionsComponent,
  ],

  imports: [CommonModule, FormsModule],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    BannerComponent,
    VndCurrencyPipe,
    MedCardComponent,
    MedCategoriesComponent,
    UserOptionsComponent,
  ],
})
export class SharedModule {}
