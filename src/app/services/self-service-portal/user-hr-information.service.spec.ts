import { TestBed } from '@angular/core/testing';

import { UserHrInformationService } from './user-hr-information.service';

describe('UserHrInformationService', () => {
  let service: UserHrInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHrInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
