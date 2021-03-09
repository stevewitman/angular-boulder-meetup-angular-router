import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home.component';
import { OrdersPageComponent } from './orders/orders-page/orders-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { SigninComponent } from './core/components/signin/signin.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
// pathMatch: 'full' needed for exact match of empty path
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
// eager loaded route
  {
    path: 'home',
    component: HomePageComponent,
  },
// lazy loaded route
  {
    path: 'seeds',
    loadChildren: () =>
      import('./seeds/seeds.module').then((m) => m.SeedsModule),
  },
// route with a route guard
  {
    path: 'orders',
    component: OrdersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
// wildcard route always goes at the end of the routes array
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
