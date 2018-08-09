import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaskComponent } from './atask.component';

describe('AtaskComponent', () => {
  let component: AtaskComponent;
  let fixture: ComponentFixture<AtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
