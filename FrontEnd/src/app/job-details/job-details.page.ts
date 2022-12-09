import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../apis/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
jobs: any = [];
isActive: boolean= false;
  
constructor(private service:JobService, private router:Router) { }

  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;
    const user_id = JSON.stringify(data);
    const id = JSON.parse(user_id)["id"];
    this.service.get_job(id).subscribe(response => {
      const info = JSON.stringify(response);
      console.log(info);
      this.jobs = response;
    });
    

  }

  save()
{
  if(this.isActive){
    this.isActive = false;
  }else{
    this.isActive = true;
  }
}
}
