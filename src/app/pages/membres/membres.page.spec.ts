import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresPage } from './membres.page';

describe('MembresPage', () => {
  let component: MembresPage;
  let fixture: ComponentFixture<MembresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
