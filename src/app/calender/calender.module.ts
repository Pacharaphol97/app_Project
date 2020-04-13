import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderPageRoutingModule,
    CalendarModule
  ],
  declarations: [CalenderPage]
})
export class CalenderPageModule {}
