import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';
import { ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {




  constructor(private service:JobService, private router:Router) {
   
  }
  jobs: any = [];
searchTerm: string = "";
  handleRefresh(event: any) {
    setTimeout(() => {
      this.service.get_jobs().subscribe(response => {
        this.jobs = response;
      });
      event.target.complete();
    }, 2000);
  };

  _ionChange(event: Event){
console.log((<CustomEvent>event).detail.value);
  }

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
