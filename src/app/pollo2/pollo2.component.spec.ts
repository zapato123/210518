import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pollo2Component } from './pollo2.component';

describe('Pollo2Component', () => {
  let component: Pollo2Component;
  let fixture: ComponentFixture<Pollo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pollo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pollo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
