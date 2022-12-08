import { Component, OnInit } from '@angular/core';
import { genders } from 'src/app/utilities/constants';
import { UserService } from '../apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  gender_list: string[] = [];
  username:string = "";
  email:string = "";
  password:string = "";
  gender:string = "";
  dob:string= "";
  address:string="";
  number:string="";
  error:string="";

  constructor(private router:Router, private service:UserService) { 
     this.gender_list = genders;
     
  }

  ngOnInit() {
  }

  register(){
    this.service.addUser(this.username, this.email, this.password, this.gender, this.dob, this.address, this.number).subscribe(response=>{
     const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];
      if(status == "Missing info" || status == "Missing information"){
        this.error = "Please fill out all the fields!";
      }else if (status == "Email exists"){
        this.error = "Account already exists!";
      }else if (status == "User registered"){
this.router.navigateByUrl('login');
      }
     }
      );
   
  
  }

}
