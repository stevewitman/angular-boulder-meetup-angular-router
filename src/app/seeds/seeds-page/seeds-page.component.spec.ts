import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsPageComponent } from './seeds-page.component';

describe('SeedsPageComponent', () => {
  let component: SeedsPageComponent;
  let fixture: ComponentFixture<SeedsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
