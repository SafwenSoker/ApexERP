import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssessmentDetailsComponent } from './get-assessment-details.component';

describe('GetAssessmentDetailsComponent', () => {
  let component: GetAssessmentDetailsComponent;
  let fixture: ComponentFixture<GetAssessmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAssessmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAssessmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
