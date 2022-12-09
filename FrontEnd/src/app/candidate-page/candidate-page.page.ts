import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';
import { Preferences
 } from '@capacitor/preferences';
@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.page.html',
  styleUrls: ['./candidate-page.page.scss'],
})
export class CandidatePagePage implements OnInit {
job_id:string = "";
candidates: any = [];
error:string = "";
  constructor(private service:JobService, private router:Router) { }

  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    const results = JSON.stringify(data);
    const id = JSON.parse(results)["id"];
    this.job_id = id;
    this.service.get_applicants(this.job_id).subscribe(response => {
      this.candidates = response;
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];

     if(status == "No one applied to job"){
      this.error = "No one is interested yet :( Try to come back later!"
    }
    
    });
  }

  async hire(id: string){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.hire_candidate(this.job_id, user_id['id'], id).subscribe(response=>{
      const str = JSON.stringify(response);
       const result = JSON.parse(str);
      const status = result['status'];
       if(status == "Missing info" || status == "Missing information"){
         this.error = "Please fill out all the fields!";
       }else if (status == "User Hired"){
         this.router.navigateByUrl('');
       }else if (status == "User Already hired"){
 this.error = "This user has already been notified!";
       }
      }
       );

  }

}
