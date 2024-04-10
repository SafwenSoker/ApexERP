  import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonalInformationComponent } from './view-personal-information.component';

describe('ViewPersonalInformationComponent', () => {
  let component: ViewPersonalInformationComponent;
  let fixture: ComponentFixture<ViewPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPersonalInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
