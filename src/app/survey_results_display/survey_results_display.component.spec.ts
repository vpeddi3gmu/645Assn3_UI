import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResultsDisplayComponent } from './survey_results_display.component';

describe('SurveyResultsDisplayComponent', () => {
  let component: SurveyResultsDisplayComponent;
  let fixture: ComponentFixture<SurveyResultsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyResultsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResultsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
