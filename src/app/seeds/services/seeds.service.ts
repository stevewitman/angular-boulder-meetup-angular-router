import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Category } from '../models/category';
// import { Course } from '../model/course';
// import { LessonDetail } from '../model/lesson-detail';
// import { LessonSummary } from '../model/lesson-summary';

@Injectable({
  providedIn: 'root',
})
export class SeedsService {
  
  constructor(private httpClient: HttpClient) {}

  loadAllCategories(): Observable<any> {
    console.log('LoadAllCategories ran')
    return this.httpClient
      .get<Category[]>('/api/categories')
      .pipe(tap((val) => console.log(`BEFORE MAP: ${val}`)))
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      )
      .pipe(tap((val) => console.log(`AFTER MAP: ${val}`)));
  }

  loadCategoryByUrl(categoryUrl: string) {
    return this.httpClient
      .get<Category>(`/api/categories/${categoryUrl}`)
      .pipe(shareReplay());
  }
}
