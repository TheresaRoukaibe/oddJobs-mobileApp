import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../apis/user.service';
import { Preferences } from '@capacitor/preferences';
import { JobService } from '../apis/job.service';
@Component({
  selector: 'app-my-posted-jobs',
  templateUrl: './my-posted-jobs.page.html',
  styleUrls: ['./my-posted-jobs.page.scss'],
})
export class MyPostedJobsPage implements OnInit {

  constructor(private job_service:JobService, private service:UserService, private router:Router) { }
error:string = "";
  jobs: any = [];

  async ngOnInit() {
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_user_jobs(user_id["id"]).subscribe(response => {
      this.jobs = response;
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];
     if(status == "User has not posted jobs yet"){
      this.error = "You haven't posted any job yet"
    }
    });
   
  }

  seeCandidates(job_id: string){
    this.router.navigate(["/candidate-page"], {state: { id : job_id }});
  }

  goBack(){
    this.router.navigateByUrl('');
  }

  delete_job(job_id: string) {
    this.job_service.delete_job(job_id).subscribe(response => {
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];
     if(status == "Job deleted"){
      this.router.navigateByUrl('');
     }else{
      this.error = "Something went wrong";
     }
    });
    }
}
