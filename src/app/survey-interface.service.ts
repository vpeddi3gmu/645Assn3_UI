//VamsiKrishnaPeddi
//This is the survey interface where the backend comminication pojo variables are declared
//This varaibles are populated when user submits the form

import { Injectable } from '@angular/core';


export class Survey{
  constructor(){}

  fName : string = '';
  lName : string = '';
  address : string = '';
  city : string = '';
  state : string = '';
  zip : string = '';
  phone : string = '';
  email : string = '';
  date : string = '';

  campus_temp : boolean[] = [false,false,false,false,false,false];
  campus : string = '';
  reason : string = ''; 
  likelihood : string = '';
}

