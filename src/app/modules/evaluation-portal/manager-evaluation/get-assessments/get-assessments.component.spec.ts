import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssessmentsComponent } from './get-assessments.component';

describe('GetAssessmentsComponent', () => {
  let component: GetAssessmentsComponent;
  let fixture: ComponentFixture<GetAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAssessmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
