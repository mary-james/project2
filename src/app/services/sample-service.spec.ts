import { TestBed, inject } from '@angular/core/testing';

import { SampleService } from './sample-service';

describe('SampleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService]
    });
  });

  it('should be created', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));
});
