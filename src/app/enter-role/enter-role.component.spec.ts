import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRoleComponent } from './enter-role.component';

describe('EnterRoleComponent', () => {
  let component: EnterRoleComponent;
  let fixture: ComponentFixture<EnterRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
