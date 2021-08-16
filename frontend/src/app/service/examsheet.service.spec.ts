import { TestBed } from '@angular/core/testing';

import { ExamsheetService } from './examsheet.service';

describe('ExamsheetService', () => {
  let service: ExamsheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
