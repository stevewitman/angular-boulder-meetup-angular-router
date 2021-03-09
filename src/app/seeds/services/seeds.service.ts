import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Category } from '../models/category';
import { VarietySummary } from '../models/variety-summary';
import { VarietyDetail } from '../models/variety-detail';

@Injectable({
  providedIn: 'root',
})
export class SeedsService {
  constructor(private httpClient: HttpClient) {}

  loadAllCategories(): Observable<any> {
    console.log('LoadAllCategories ran');
    return this.httpClient.get<Category[]>('/api/categories').pipe(
      map((res) => res['payload']),
      shareReplay()
    );
  }

  loadCategoryByUrl(categoryUrl: string) {
    return this.httpClient
      .get<Category>(`/api/categories/${categoryUrl}`)
      .pipe(shareReplay());
  }

  loadAllCategoryVarietiesSummary(
    categoryUrl: string
  ): Observable<VarietySummary[]> {
    return this.httpClient
      .get<VarietySummary[]>('/api/varieties', {
        params: {
          pageSize: '10000',
          categoryUrl,
        },
      })
      .pipe(
        map((res) => res['payload']),
        shareReplay()
      );
  }

  loadVarietyDetail(
    categoryUrl: string,
    varietySeqNo: string
  ): Observable<VarietyDetail> {
    return this.httpClient
      .get<VarietyDetail>(`/api/variety-details`, {
        params: {
          categoryUrl,
          varietySeqNo,
        },
      })
      .pipe(shareReplay());
  }
}
