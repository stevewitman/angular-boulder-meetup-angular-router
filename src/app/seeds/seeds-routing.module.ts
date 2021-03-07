import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryVarietiesComponent } from './category-varieties/category-varieties.component';
import { SeedsPageComponent } from './seeds-page/seeds-page.component';
import { CategoryResolver } from './services/category.resolver';
import { VarietiesResolver } from './services/varieties.resolver';
import { VarietyDetailComponent } from './variety-detail/variety-detail.component';
import { VarietyListComponent } from './variety-list/variety-list.component';

const routes: Routes = [
  {
    path: '',
    component: SeedsPageComponent,
  },
  {
    path: ':categoryUrl',
    component: CategoryVarietiesComponent,
    children: [
      {
        path: '',
        component: VarietyListComponent,
        resolve: {
          varieties: VarietiesResolver
        }
      },
      {
        path: 'varieties/:variety',
        component: VarietyDetailComponent
      }
    ],
    resolve: {
      category: CategoryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoryResolver, VarietiesResolver],
})
export class SeedsRoutingModule {}
