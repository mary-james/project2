import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaduserComponent } from './eaduser.component';

describe('EaduserComponent', () => {
  let component: EaduserComponent;
  let fixture: ComponentFixture<EaduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
