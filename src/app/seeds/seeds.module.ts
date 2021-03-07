import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedsRoutingModule } from './seeds-routing.module';
import { SeedsPageComponent } from './seeds-page/seeds-page.component';
import { CategoriesCardListComponent } from './categories-card-list/categories-card-list.component';
import { SeedsService } from './services/seeds.service';
import { CategoryVarietiesComponent } from './category-varieties/category-varieties.component';
import { SharedModule } from '../shared/shared.module';
import { VarietyListComponent } from './variety-list/variety-list.component';
import { VarietyDetailComponent } from './variety-detail/variety-detail.component';

@NgModule({
  declarations: [SeedsPageComponent, CategoriesCardListComponent, CategoryVarietiesComponent, VarietyListComponent, VarietyDetailComponent],
  imports: [CommonModule, SeedsRoutingModule, SharedModule],
  exports: [SeedsPageComponent],
  providers: [SeedsService],
})
export class SeedsModule {}
