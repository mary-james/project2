import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdetailsComponent } from './tdetails.component';

describe('TdetailsComponent', () => {
  let component: TdetailsComponent;
  let fixture: ComponentFixture<TdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
