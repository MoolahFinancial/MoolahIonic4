import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPagePage } from './invest-page.page';

describe('InvestPagePage', () => {
  let component: InvestPagePage;
  let fixture: ComponentFixture<InvestPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
