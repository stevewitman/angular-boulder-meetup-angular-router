import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietiesListComponent } from './varieties-list.component';

describe('VarietiesListComponent', () => {
  let component: VarietiesListComponent;
  let fixture: ComponentFixture<VarietiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
