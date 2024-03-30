import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssessmentComponent } from './get-assessment.component';

describe('GetAssessmentComponent', () => {
  let component: GetAssessmentComponent;
  let fixture: ComponentFixture<GetAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
