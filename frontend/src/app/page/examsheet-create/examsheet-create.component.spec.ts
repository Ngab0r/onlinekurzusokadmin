import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsheetCreateComponent } from './examsheet-create.component';

describe('ExamsheetCreateComponent', () => {
  let component: ExamsheetCreateComponent;
  let fixture: ComponentFixture<ExamsheetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamsheetCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsheetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
