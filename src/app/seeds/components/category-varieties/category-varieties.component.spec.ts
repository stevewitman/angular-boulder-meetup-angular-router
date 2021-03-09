import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVarietiesComponent } from './category-varieties.component';

describe('CategoryVarietiesComponent', () => {
  let component: CategoryVarietiesComponent;
  let fixture: ComponentFixture<CategoryVarietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryVarietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryVarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
