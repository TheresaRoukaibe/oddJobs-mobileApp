import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
jobs: any = [];
isActive: boolean= false;
j_id: string = "";
error:string = "";
constructor(private service:JobService, private router:Router) { }

  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    const user_id = JSON.stringify(data);
    const id = JSON.parse(user_id)["id"];
    this.j_id = id;
    this.service.get_job(id).subscribe(response => {
      const info = JSON.stringify(response);
      this.jobs = response;
    });
    

  }

  async save()
{
  if(this.isActive){
    this.isActive = false;
  }else{
    const user =  await Preferences.get({key : 'user'});
    const users_id = JSON.parse(user.value || '{}');
console.log(users_id["id"]);
  this.service.save_job(this.j_id, users_id['id']).subscribe(response=>{
    const str = JSON.stringify(response);
     const result = JSON.parse(str);
    const status = result['status'];
    if(status == "Favorite own job"){
      this.error = "This is already your job! Find it under your profile";
    }else if (status == "Already saved"){
      this.isActive = true;
      this.error = "Already saved this job!";
    }else if (status == "User Saved Job"){
      this.isActive = true;
this.router.navigateByUrl('');
    }
    }
     );
  }
}

async apply(){
  //getting user applying to job
    const user =  await Preferences.get({key : 'user'});
    const users_id = JSON.parse(user.value || '{}');
  this.service.apply_for_job(this.j_id, users_id['id']).subscribe(response=>{
    const str = JSON.stringify(response);
     const result = JSON.parse(str);
    const status = result['status'];
    if(status == "Applying to own job"){
      this.error = "This is already your job!";
    }else if (status == "Already applied"){
      this.error = "Already applied to this job!";
    }else if (status == "User Applied for Job"){
this.router.navigateByUrl('');
    }
    }
     );
}
}
