//VamsiKrishnaPeddi
//This is the routing for angular applcation where the new components created as part of assignment will be defined with uris

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyFormComponent } from './survey_form/survey_form.component';
import { SurveyResultsDisplayComponent } from './survey_results_display/survey_results_display.component';
import { HomePageComponent } from './home_page/home_page.component';

const routes: Routes = [
  {path: "",  component: HomePageComponent, pathMatch: "full"},
  {
    path:'survey-form',
    component: SurveyFormComponent
  } ,
  {
    path:'survey_results_display',
    component: SurveyResultsDisplayComponent
  } ,
  {
    path:'home_page',
    component: HomePageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
