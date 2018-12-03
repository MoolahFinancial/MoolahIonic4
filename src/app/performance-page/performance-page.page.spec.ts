import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePagePage } from './performance-page.page';

describe('PerformancePagePage', () => {
  let component: PerformancePagePage;
  let fixture: ComponentFixture<PerformancePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
