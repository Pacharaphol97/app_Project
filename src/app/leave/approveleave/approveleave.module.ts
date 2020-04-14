import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveleavePageRoutingModule } from './approveleave-routing.module';

import { ApproveleavePage } from './approveleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveleavePageRoutingModule
  ],
  declarations: [ApproveleavePage]
})
export class ApproveleavePageModule {}
