import { Component, OnInit } from '@angular/core';
import { genders } from 'src/app/utilities/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  gender_list: string[] = [];
  constructor() { 
     this.gender_list = genders;
  }

  ngOnInit() {
  }

}
