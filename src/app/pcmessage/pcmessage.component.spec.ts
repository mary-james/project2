import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmessageComponent } from './pcmessage.component';

describe('PcmessageComponent', () => {
  let component: PcmessageComponent;
  let fixture: ComponentFixture<PcmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
