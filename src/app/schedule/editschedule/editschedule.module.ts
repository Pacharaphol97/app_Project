import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditschedulePageRoutingModule } from './editschedule-routing.module';

import { EditschedulePage } from './editschedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditschedulePageRoutingModule
  ],
  declarations: [EditschedulePage]
})
export class EditschedulePageModule {}
