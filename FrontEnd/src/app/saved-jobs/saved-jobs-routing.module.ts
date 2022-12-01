import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedJobsPage } from './saved-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: SavedJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedJobsPageRoutingModule {}
