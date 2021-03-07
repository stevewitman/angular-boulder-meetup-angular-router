import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Category, sortCategoriesBySeqNo } from '../models/category';
import { SeedsService } from '../services/seeds.service';

@Component({
  selector: 'app-seeds-page',
  templateUrl: './seeds-page.component.html',
  styleUrls: ['./seeds-page.component.scss'],
})
export class SeedsPageComponent implements OnInit {
  vegetableCategories$: Observable<Category[]>;
  categories$;

  constructor(
    private seedsService: SeedsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.reloadCategories();
  }

  // reloadCourses() {
  //   const courses$ = this.courses.loadAllCourses();
  //   this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
  //   this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');
  // }
  reloadCategories() {
    const categories$ = this.seedsService.loadAllCategories();
    this.vegetableCategories$ = this.filterBySeedGroup(
      categories$,
      'vegetable'
    );
  }
  filterBySeedGroup(categories$: Observable<Category[]>, seedGroup: string) {
    return this.loadingService
      .showLoaderUntilCompleted(categories$)
      .pipe(tap((val) => console.log(`BEFORE MAP: ${val}`)))

      .pipe(
        map((categories) =>
          categories
            .filter((category) => category.seedGroup == seedGroup)
            .sort(sortCategoriesBySeqNo)
        )
      )
      .pipe(tap((val) => console.log(`AFTER MAP: ${val}`)));
  }
  // filterByCategory(courses$: Observable<Course[]>, category: string) {
  //   return this.loading
  //     .showLoaderUntilCompleted(courses$)
  //     .pipe(
  //       map((courses) =>
  //         courses
  //           .filter((course) => course.category == category)
  //           .sort(sortCoursesBySeqNo)
  //       )
  //     );
  // }
}
