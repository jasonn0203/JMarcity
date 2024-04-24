import { HomeComponent } from './core/layouts/home/home.component';
import { NotFoundComponent } from './core/layouts/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Lazy load routing
  {
    path: 'medicine',
    loadChildren: () =>
      import('./core/layouts/medicine/medicine.module').then(
        (m) => m.MedicineModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
