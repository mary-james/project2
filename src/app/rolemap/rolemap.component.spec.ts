import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemapComponent } from './rolemap.component';

describe('RolemapComponent', () => {
  let component: RolemapComponent;
  let fixture: ComponentFixture<RolemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
