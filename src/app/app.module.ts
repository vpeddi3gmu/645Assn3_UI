import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SurveyFormComponent } from './survey_form/survey_form.component';
import { SurveyResultsDisplayComponent } from './survey_results_display/survey_results_display.component';
import { HomePageComponent } from './home_page/home_page.component';
@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    SurveyResultsDisplayComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
