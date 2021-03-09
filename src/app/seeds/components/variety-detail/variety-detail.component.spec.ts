import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyDetailComponent } from './variety-detail.component';

describe('VarietyDetailComponent', () => {
  let component: VarietyDetailComponent;
  let fixture: ComponentFixture<VarietyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
