import { FillSurveyService } from './services/fill-survey.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FillSurveyComponent } from './shared/fill-survey/fill-survey.component';
import { ViewSurveyComponent } from './shared/view-survey/view-survey.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FillSurveyComponent,
    ViewSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [FillSurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
