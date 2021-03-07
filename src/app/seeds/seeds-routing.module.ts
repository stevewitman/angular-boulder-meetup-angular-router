import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryVarietiesComponent } from './category-varieties/category-varieties.component';
import { SeedsPageComponent } from './seeds-page/seeds-page.component';
import { CategoryResolver } from './services/category.resolver';

const routes: Routes = [
  {
    path: '',
    component: SeedsPageComponent,
  },
  {
    path: ':categoryUrl',
    component: CategoryVarietiesComponent,
    resolve: {
      category: CategoryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoryResolver]
})
export class SeedsRoutingModule { }
