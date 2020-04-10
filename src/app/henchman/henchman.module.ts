import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HenchmanPageRoutingModule } from './henchman-routing.module';

import { HenchmanPage } from './henchman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HenchmanPageRoutingModule
  ],
  declarations: [HenchmanPage]
})
export class HenchmanPageModule {}
