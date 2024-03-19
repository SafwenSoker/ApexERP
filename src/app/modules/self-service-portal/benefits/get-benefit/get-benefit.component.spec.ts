import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBenefitComponent } from './get-benefit.component';

describe('GetBenefitComponent', () => {
  let component: GetBenefitComponent;
  let fixture: ComponentFixture<GetBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBenefitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
