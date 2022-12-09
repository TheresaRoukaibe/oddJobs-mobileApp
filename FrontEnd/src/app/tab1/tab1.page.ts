import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private service:JobService, private router:Router) {}

  jobs: any = [];

  handleRefresh(event: any) {
    setTimeout(() => {
      this.service.get_jobs().subscribe(response => {
        this.jobs = response;
      });
      event.target.complete();
    }, 2000);
  };


goToJobs(){
  this.router.navigateByUrl("my-posted-jobs");
}
  ionViewDidEnter() {
    this.service.get_jobs().subscribe(response => {
      this.jobs = response;
    });
  }

   goToAddPage() {
    this.router.navigateByUrl('add-job');
  }

  

  seeDetails(job_id: string) {
  this.router.navigate(["/job-details"], {state: { id : job_id }});

  }


}
