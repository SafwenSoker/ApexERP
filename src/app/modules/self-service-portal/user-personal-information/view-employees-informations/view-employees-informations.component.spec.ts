import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesInformationsComponent } from './view-employees-informations.component';

describe('ViewEmployeesInformationsComponent', () => {
  let component: ViewEmployeesInformationsComponent;
  let fixture: ComponentFixture<ViewEmployeesInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEmployeesInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEmployeesInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
