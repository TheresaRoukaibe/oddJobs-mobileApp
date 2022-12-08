import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
})
export class AddJobPage implements OnInit {
  title:string = "";
  salary:string = "";
  age:string = "";
  start_from:string = "";
  end_on:string= "";
  description:string="";
  location:string="";

  constructor(private service:JobService, private router:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigateByUrl('');
  }

   async add(){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.addJob(this.title, this.salary, this.age, this.start_from, this.end_on, this.location, this.description, user_id['id']).subscribe(response=>{
      const str = JSON.stringify(response);
       const result = JSON.parse(str);
      const status = result['status'];
       if(status == "Missing info" || status == "Missing information"){
         
       }else if (status == "Job Added"){
         this.router.navigateByUrl('');
      }
    });
    
   
  }

}
