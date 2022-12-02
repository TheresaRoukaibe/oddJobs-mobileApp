import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatePagePage } from './candidate-page.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatePagePageRoutingModule {}
