import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBenefitComponent } from './update-benefit.component';

describe('UpdateBenefitComponent', () => {
  let component: UpdateBenefitComponent;
  let fixture: ComponentFixture<UpdateBenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBenefitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
