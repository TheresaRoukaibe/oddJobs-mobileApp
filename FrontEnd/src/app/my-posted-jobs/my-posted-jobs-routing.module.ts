import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPostedJobsPage } from './my-posted-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: MyPostedJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPostedJobsPageRoutingModule {}
