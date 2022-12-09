import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.page.html',
  styleUrls: ['./saved-jobs.page.scss'],
})
export class SavedJobsPage implements OnInit {
  error:string = "";
  constructor(private service:JobService, private router:Router) { }
  jobs: any = [];
  async ngOnInit() {
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_saved(user_id["id"]).subscribe(response => {
      this.jobs = response;
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];

     if(status == "No saves for this user"){
      this.error = "Nothing saved yet!"
    }
    
    });
   
  }
  
  goBack(){
    this.router.navigateByUrl('');
  }
}
