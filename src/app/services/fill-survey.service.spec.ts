import { TestBed } from '@angular/core/testing';

import { FillSurveyService } from './fill-survey.service';

describe('FillSurveyService', () => {
  let service: FillSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
