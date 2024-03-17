import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTasksComponent } from './get-tasks.component';

describe('GetTasksComponent', () => {
  let component: GetTasksComponent;
  let fixture: ComponentFixture<GetTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
