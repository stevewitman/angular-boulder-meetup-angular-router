import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedsRoutingModule } from './seeds-routing.module';
import { SeedsPageComponent } from './components/seeds-page/seeds-page.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SeedsService } from './services/seeds.service';
import { CategoryVarietiesComponent } from './components/category-varieties/category-varieties.component';
import { SharedModule } from '../shared/shared.module';
import { VarietyListComponent } from './components/variety-list/variety-list.component';
import { VarietyDetailComponent } from './components/variety-detail/variety-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SeedsPageComponent,
    CategoriesListComponent,
    CategoryVarietiesComponent,
    VarietyListComponent,
    VarietyDetailComponent,
  ],
  imports: [CommonModule, SeedsRoutingModule, SharedModule, MatIconModule],
  exports: [SeedsPageComponent],
  providers: [SeedsService],
})
export class SeedsModule {}
