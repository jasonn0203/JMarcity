import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, FooterComponent],

  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, SearchComponent, FooterComponent],
})
export class SharedModule {}
