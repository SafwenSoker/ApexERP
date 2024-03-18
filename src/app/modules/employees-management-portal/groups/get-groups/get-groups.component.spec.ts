import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGroupsComponent } from './get-groups.component';

describe('GetGroupsComponent', () => {
  let component: GetGroupsComponent;
  let fixture: ComponentFixture<GetGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
