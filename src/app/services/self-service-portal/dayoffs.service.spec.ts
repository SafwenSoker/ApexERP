import { TestBed } from '@angular/core/testing';

import { DayoffsService } from './dayoffs.service';

describe('DayoffsService', () => {
  let service: DayoffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayoffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
