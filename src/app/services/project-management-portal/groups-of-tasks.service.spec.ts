import { TestBed } from '@angular/core/testing';

import { GroupsOfTasksService } from './groups-of-tasks.service';

describe('GroupsOfTasksService', () => {
  let service: GroupsOfTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsOfTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
