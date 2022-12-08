import { Component, OnInit } from '@angular/core';
import { UserService } from '../apis/user.service';
import { Preferences} from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  users: any = [];
username:string ="";
email:string="";
password:string="";
address:string="";
number:string="";
error:string="";

  constructor(private router:Router, private service:UserService) { }

  async ngOnInit() {
     const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_user(user_id['id']).subscribe(response => {
      this.users= response;
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     this.username = result[0].username;
     this.email = result[0].email;
     this.address =result[0].address;
     this.number = result[0].number;
    });
  }

  async edit_info(){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.editUser(user_id['id'], this.username, this.email, this.password, this.address, this.number).subscribe(response=>{
      const str = JSON.stringify(response);
       const result = JSON.parse(str);
      const status = result['status'];
       if(status == "Missing info" || status == "Missing information"){
         this.error = "Please fill out all the fields!";
       }else if (status == "Email exists"){
         this.error = "Email already in use!";
       }else if (status == "User Info edited"){
this.router.navigateByUrl('');
       }
      }
       );
  }

}
