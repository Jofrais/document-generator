import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentQuizComponent } from './document-quiz.component';

describe('DocumentQuizComponent', () => {
  let component: DocumentQuizComponent;
  let fixture: ComponentFixture<DocumentQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocumentQuizComponent]
    });
    fixture = TestBed.createComponent(DocumentQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
