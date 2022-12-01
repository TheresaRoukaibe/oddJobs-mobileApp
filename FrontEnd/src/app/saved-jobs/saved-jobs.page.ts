import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.page.html',
  styleUrls: ['./saved-jobs.page.scss'],
})
export class SavedJobsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  goBack(){
    this.router.navigateByUrl('');
  }
}
