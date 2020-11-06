import { SurveyModel } from './../../Model/survey.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { Observable } from 'rxjs';

interface Users {
  id?: string;
  surname: string;
  fullName: string;
  contact: string;
  date: Date;
  age: number;
  pizza: boolean;
  pasta: boolean;
  pap: boolean;
  chicken: boolean;
  beef: boolean;
  other: boolean;
  strongly: number;
  agree: number;
  neutral: number;
  disagree: number;
  stronglyD: number;
  strongly2: number;
  agree2: number;
  neutral2: number;
  disagree2: number;
  stronglyD2: number;
  strongly3: number;
  agree3: number;
  neutral3: number;
  disagree3: number;
  stronglyD3: number;
  strongly4: number;
  agree4: number;
  neutral4: number;
  disagree4: number;
}

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {
  usersCollection: AngularFirestoreCollection<any>;
  users$: Observable<any>;



  constructor(private firestore: AngularFirestore,
    private router: Router) {
    this.usersCollection = this.firestore.collection('users');
    this.users$ = this.usersCollection.valueChanges();
     }

  ngOnInit(): void {
    // this.firestore.collection('users').doc('IVxkuBTT4FB2PGmPwWyE');

  }


  viewResult(){
    this.router.navigateByUrl('');
  }
}
