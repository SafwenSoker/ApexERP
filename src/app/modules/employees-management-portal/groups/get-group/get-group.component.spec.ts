import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGroupComponent } from './get-group.component';

describe('GetGroupComponent', () => {
  let component: GetGroupComponent;
  let fixture: ComponentFixture<GetGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
