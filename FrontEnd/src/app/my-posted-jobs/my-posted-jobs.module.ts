import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPostedJobsPageRoutingModule } from './my-posted-jobs-routing.module';

import { MyPostedJobsPage } from './my-posted-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPostedJobsPageRoutingModule
  ],
  declarations: [MyPostedJobsPage]
})
export class MyPostedJobsPageModule {}
