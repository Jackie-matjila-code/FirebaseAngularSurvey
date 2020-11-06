import { SurveyModel } from './../Model/survey.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FillSurveyService {

formData: SurveyModel;

  constructor() { }
}
