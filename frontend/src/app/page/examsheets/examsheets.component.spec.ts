import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsheetsComponent } from './examsheets.component';

describe('ExamsheetsComponent', () => {
  let component: ExamsheetsComponent;
  let fixture: ComponentFixture<ExamsheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamsheetsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
