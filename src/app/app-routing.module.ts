import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { SigninComponent } from './core/components/signin/signin.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'seeds',
    loadChildren: () =>
      import('./seeds/seeds.module').then((m) => m.SeedsModule),
  },
  {
    path: 'orders',
    component: OrdersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
