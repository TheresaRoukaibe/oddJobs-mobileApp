import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedJobsPageRoutingModule } from './saved-jobs-routing.module';

import { SavedJobsPage } from './saved-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedJobsPageRoutingModule
  ],
  declarations: [SavedJobsPage]
})
export class SavedJobsPageModule {}
