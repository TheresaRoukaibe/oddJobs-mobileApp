import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string = "";
  password:string = "";
error:string = "";

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
  }

  goToRegisterPage() {
    this.router.navigateByUrl('signup');
  }

  login(){
    this.service.validateUser(this.email, this.password).subscribe(response=>{
     const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];
      if(status == "Missing information"){
       this.error="Please fill out all the fields!";
      }else if (status == "Account not found"){
        this.error="Please register first!";
      }else if(status == "Wrong password"){
        this.error="Incorrect password!";
      }else{
        
      }
     }
      );
   
  
  }

}
