import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-my-posted-jobs',
  templateUrl: './my-posted-jobs.page.html',
  styleUrls: ['./my-posted-jobs.page.scss'],
})
export class MyPostedJobsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  seeCandidates(){
this.router.navigateByUrl('candidate-page');
  }

  goBack(){
    this.router.navigateByUrl('');
  }

}
