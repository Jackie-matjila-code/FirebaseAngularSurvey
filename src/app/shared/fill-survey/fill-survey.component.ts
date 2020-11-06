import { FillSurveyService } from './../../services/fill-survey.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {

  constructor(public service: FillSurveyService,
    private firestore: AngularFirestore,
    private route: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

 resetForm(form?: NgForm){
   if(form != null)
   form.resetForm();
   this.service.formData = {
     id: 1,
     surname: '',
     fullName: '',
     contact: '',
     get date() {
       return this._date;
     },
     set date(value) {
       this._date = value;
     },
     age: 6,
     pizza: false,
     pasta: false,
     pap: false,
     chicken: false,
     beef: false,
     other: false,
     strongly: 1,
     agree: 2,
     neutral: 3,
     disagree: 4,
     stronglyD: 5,
     strongly2: 1,
     agree2: 2,
     neutral2: 3,
     disagree2: 4,
     stronglyD2: 5,
     strongly3: 1,
     agree3: 2,
     neutral3: 3,
     disagree3: 4,
     stronglyD3: 5,
     strongly4: 1,
     agree4: 2,
     neutral4: 3,
     disagree4: 4,
     stronglyD4: 5,
   }
 };

 onSubmit(form:NgForm){
   let data = form.value;
   this.firestore.collection('users').add(data);
   this.resetForm(form);
   this.route.navigateByUrl('');
 }
}
