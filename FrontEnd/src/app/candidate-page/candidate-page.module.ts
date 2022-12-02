import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatePagePageRoutingModule } from './candidate-page-routing.module';

import { CandidatePagePage } from './candidate-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatePagePageRoutingModule
  ],
  declarations: [CandidatePagePage]
})
export class CandidatePagePageModule {}
