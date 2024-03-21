import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBenefitsRequestsComponent } from './get-benefits-requests.component';

describe('GetBenefitsRequestsComponent', () => {
  let component: GetBenefitsRequestsComponent;
  let fixture: ComponentFixture<GetBenefitsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBenefitsRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBenefitsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
