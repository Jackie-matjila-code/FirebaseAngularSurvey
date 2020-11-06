import { ViewSurveyComponent } from './shared/view-survey/view-survey.component';
import { FillSurveyComponent } from './shared/fill-survey/fill-survey.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'survey', component: FillSurveyComponent},
  {path: 'view', component: ViewSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
