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
app_count:string = "";
applicants:any = [];

  async ionViewDidEnter(){
    const user =  await Preferences.get({key : 'user'});
    const user_id = JSON.parse(user.value || '{}');
    this.service.get_who_hired_user(user_id['id']).subscribe(response => {
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];

     if(status == "No one hired user"){
      this.count = "0";
    }else{
      this.users= response;
      this.count = this.users.length;
    }
    });

    this.service.get_who_applied_for_user(user_id['id']).subscribe(response => {
      const str = JSON.stringify(response);
      const result = JSON.parse(str);
     const status = result['status'];

     if(status == "No one applied to job"){
      this.app_count = "0";
    }else{
      this.applicants= response;
      this.app_count = this.applicants.length;
    }
    });
  }
}
