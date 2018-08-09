import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unassign1Component } from './unassign1.component';

describe('Unassign1Component', () => {
  let component: Unassign1Component;
  let fixture: ComponentFixture<Unassign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unassign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unassign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
