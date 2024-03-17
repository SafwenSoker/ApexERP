import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSprintsComponent } from './get-sprints.component';

describe('GetSprintsComponent', () => {
  let component: GetSprintsComponent;
  let fixture: ComponentFixture<GetSprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSprintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
