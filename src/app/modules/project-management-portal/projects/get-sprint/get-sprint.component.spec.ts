import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSprintComponent } from './get-sprint.component';

describe('GetSprintComponent', () => {
  let component: GetSprintComponent;
  let fixture: ComponentFixture<GetSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
