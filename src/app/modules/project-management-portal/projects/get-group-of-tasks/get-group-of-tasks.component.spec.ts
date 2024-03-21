import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGroupOfTasksComponent } from './get-group-of-tasks.component';

describe('GetGroupOfTasksComponent', () => {
  let component: GetGroupOfTasksComponent;
  let fixture: ComponentFixture<GetGroupOfTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGroupOfTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGroupOfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
