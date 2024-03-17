import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDocumentComponent } from './get-document.component';

describe('GetDocumentComponent', () => {
  let component: GetDocumentComponent;
  let fixture: ComponentFixture<GetDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
