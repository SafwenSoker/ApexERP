import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSubmittedComponent } from './assessment-submitted.component';

describe('AssessmentSubmittedComponent', () => {
  let component: AssessmentSubmittedComponent;
  let fixture: ComponentFixture<AssessmentSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentSubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssessmentSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
