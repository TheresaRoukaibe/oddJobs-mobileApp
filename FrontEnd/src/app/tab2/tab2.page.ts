import { Component } from '@angular/core';
import { JobService } from '../apis/job.service';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(private service:JobService) {}
users:any = [];
count:string = "";
  async ionViewDidEnter(){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_who_hired_user(user_id['id']).subscribe(response => {
      this.users= response;
      this.count = this.users.length;
    });
  }
}
