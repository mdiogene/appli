import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMePage } from './find-me.page';

describe('FindMePage', () => {
  let component: FindMePage;
  let fixture: ComponentFixture<FindMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
