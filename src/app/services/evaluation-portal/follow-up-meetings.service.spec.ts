import { TestBed } from '@angular/core/testing';

import { FollowUpMeetingsService } from './follow-up-meetings.service';

describe('FollowUpMeetingsService', () => {
  let service: FollowUpMeetingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowUpMeetingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
