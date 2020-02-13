import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddleavePageRoutingModule } from './addleave-routing.module';

import { AddleavePage } from './addleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddleavePageRoutingModule
  ],
  declarations: [AddleavePage]
})
export class AddleavePageModule {}
