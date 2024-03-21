import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGroupsOfTasksComponent } from './get-groups-of-tasks.component';

describe('GetGroupsOfTasksComponent', () => {
  let component: GetGroupsOfTasksComponent;
  let fixture: ComponentFixture<GetGroupsOfTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGroupsOfTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGroupsOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
