import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Survey } from '../survey-interface.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { CheckboxRequiredValidator } from '@angular/forms';



@Component({
  selector: 'app-survey-form',
  templateUrl: './survey_form.component.html',
  styleUrls: ['./survey_form.component.css']
})

export class SurveyFormComponent implements OnInit {
  url: string = 'http://44.209.65.37:30044/645Assn3/survey_form_submission'
  message:Survey = new Survey()
  campus_value:string[] = ['students','location','campus','atmosphere', 'dorm rooms','sports'] 
  today: string = new Date().toDateString();
  
  constructor( private http:HttpClient, private router:Router) { }
  
  ngOnInit(): void {
  }

  
  campusParse (b:boolean[]):string{
    let temp='';
    b.forEach((value, index) => {
      value?(temp=temp+'  '+this.campus_value[index]):temp=temp;
    });
    return temp;
  }
  checkInfo():boolean{
    console.log(this.message.fName==''||
    this.message.lName==''||
    this.message.address==''||
    this.message.city==''||
    this.message.state==''||
    this.message.zip==''||
    this.message.phone==''||
    this.message.email==''||
    this.message.date==''||
    this.campusParse(this.message.campus_temp)==''||
    this.message.likelihood==''||
    this.message.reason=='')
    return this.message.fName==''||
           this.message.lName==''||
           this.message.address==''||
           this.message.city==''||
           this.message.state==''||
           this.message.zip==''||
           this.message.phone==''||
           this.message.email==''||
           this.message.date==''||
           this.campusParse(this.message.campus_temp)==''||
           this.message.likelihood==''||
           this.message.reason==''
           ;
  }

  onClickSubmit():void {  
    this.message.date = this.today;
    let body =new FormData();
    body.append('fName',this.message.fName);
    body.append('lName',this.message.lName);
    body.append('address',this.message.address);
    body.append('city',this.message.city);
    body.append('state',this.message.state);
    body.append('zip',this.message.zip);
    body.append('phone',this.message.phone);
    body.append('email',this.message.email);
    body.append('date',this.message.date);
    body.append('campus',this.campusParse(this.message.campus_temp));
    body.append('reason',this.message.reason);
    body.append('likelihood',this.message.likelihood);
    
    if(this.checkInfo()){
      alert('Please enter details in all the fields given in Survey form\n\n\n');
    }
    else{
      const myObserver = {
        
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      };
      this.http.post(this.url,body, { responseType: 'text' }).subscribe(
        succeed=>{
          alert('Survey submitted successfully !!! Thank you!!\n');      
          this.router.navigate(['/home_page']);
        },
        error=>{
          alert('Failed to submit the survey form\n' + body);
          console.log('this is the error:-',error)
        }
      );
      return;
    }  
      
  }
  cancel():void{
    alert("Are you sure, you want to cancel?")
    this.router.navigate(['/home_page'])
  }
}
