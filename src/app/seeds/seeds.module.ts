import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedsRoutingModule } from './seeds-routing.module';
import { SeedsPageComponent } from './seeds-page/seeds-page.component';
import { CategoriesCardListComponent } from './categories-card-list/categories-card-list.component';
import { SeedsService } from './services/seeds.service';
import { VarietiesListComponent } from './varieties-list/varieties-list.component';
import { CategoryVarietiesComponent } from './category-varieties/category-varieties.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SeedsPageComponent, CategoriesCardListComponent, VarietiesListComponent, CategoryVarietiesComponent],
  imports: [CommonModule, SeedsRoutingModule, SharedModule],
  exports: [SeedsPageComponent],
  providers: [SeedsService],
})
export class SeedsModule {}
