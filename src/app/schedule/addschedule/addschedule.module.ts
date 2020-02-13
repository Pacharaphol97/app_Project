import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddschedulePageRoutingModule } from './addschedule-routing.module';

import { AddschedulePage } from './addschedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddschedulePageRoutingModule
  ],
  declarations: [AddschedulePage]
})
export class AddschedulePageModule {}
