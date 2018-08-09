import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfmesComponent } from './profmes.component';

describe('ProfmesComponent', () => {
  let component: ProfmesComponent;
  let fixture: ComponentFixture<ProfmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
