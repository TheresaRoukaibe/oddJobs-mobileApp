import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../apis/user.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users: any = [];
  constructor(private service:UserService, private router:Router) {}

  goToEdit(){
    this.router.navigateByUrl('edit-profile');
  }

  goToSaved(){
    this.router.navigateByUrl('saved-jobs');
  }

  goToJobs(){
    this.router.navigateByUrl('my-posted-jobs');
  }

  async ionViewDidEnter(){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_user(user_id['id']).subscribe(response => {
      this.users= response;
    });
  }
}
