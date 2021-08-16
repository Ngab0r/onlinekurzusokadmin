import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsheetEditComponent } from './examsheet-edit.component';

describe('ExamsheetEditComponent', () => {
  let component: ExamsheetEditComponent;
  let fixture: ComponentFixture<ExamsheetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamsheetEditComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
