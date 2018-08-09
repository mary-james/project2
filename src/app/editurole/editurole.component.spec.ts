import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituroleComponent } from './editurole.component';

describe('EdituroleComponent', () => {
  let component: EdituroleComponent;
  let fixture: ComponentFixture<EdituroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
