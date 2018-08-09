import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtaskrepComponent } from './vtaskrep.component';

describe('VtaskrepComponent', () => {
  let component: VtaskrepComponent;
  let fixture: ComponentFixture<VtaskrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtaskrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtaskrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
