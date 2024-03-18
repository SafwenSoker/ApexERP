import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDaysoffComponent } from './get-daysoff.component';

describe('GetDaysoffComponent', () => {
  let component: GetDaysoffComponent;
  let fixture: ComponentFixture<GetDaysoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDaysoffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDaysoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
