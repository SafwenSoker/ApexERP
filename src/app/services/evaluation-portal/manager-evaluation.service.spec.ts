import { TestBed } from '@angular/core/testing';

import { ManagerEvaluationService } from './manager-evaluation.service';

describe('ManagerEvaluationService', () => {
  let service: ManagerEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
