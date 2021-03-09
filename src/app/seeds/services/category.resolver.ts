import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Category } from '../models/category';
import { SeedsService } from './seeds.service';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

  constructor(private seedsService: SeedsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category> | Promise<Category> | Category {
    const categoryUrl = route.paramMap.get('categoryUrl');
    return this.seedsService.loadCategoryByUrl(categoryUrl);
    // force completion if recieved observable does not complete
    // .pipe(
    //   first()
    // );
  }
}