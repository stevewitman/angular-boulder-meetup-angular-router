import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { VarietySummary } from '../models/variety-summary';
import { SeedsService } from './seeds.service';

@Injectable()
export class VarietiesResolver implements Resolve<VarietySummary[]> {
  constructor(private seedsService: SeedsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<VarietySummary[]> {
    const categoryUrl = route.paramMap.get('categoryUrl');
    return this.seedsService.loadAllCategoryVarietiesSummary(categoryUrl);
  }
}
