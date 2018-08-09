import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtaskmemComponent } from './vtaskmem.component';

describe('VtaskmemComponent', () => {
  let component: VtaskmemComponent;
  let fixture: ComponentFixture<VtaskmemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtaskmemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtaskmemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
