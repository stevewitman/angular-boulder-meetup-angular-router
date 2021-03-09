import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryVarietiesComponent } from './components/category-varieties/category-varieties.component';
import { SeedsPageComponent } from './components/seeds-page/seeds-page.component';
import { CategoryResolver } from './services/category.resolver';
import { VarietiesResolver } from './services/varieties.resolver';
import { VarietyDetailResolver } from './services/variety-detail.resolver';
import { VarietyDetailComponent } from './components/variety-detail/variety-detail.component';
import { VarietyListComponent } from './components/variety-list/variety-list.component';

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
          varieties: VarietiesResolver,
        },
      },
      {
        path: 'varieties/:varietySeqNo',
        component: VarietyDetailComponent,
        resolve: {
          variety: VarietyDetailResolver,
        },
      },
    ],
    resolve: {
      category: CategoryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoryResolver, VarietiesResolver, VarietyDetailResolver],
})
export class SeedsRoutingModule {}
