import { TestBed } from '@angular/core/testing';

import { SelfAssessementService } from './self-assessement.service';

describe('SelfAssessementService', () => {
  let service: SelfAssessementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfAssessementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
