import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicrelationsPageRoutingModule } from './publicrelations-routing.module';

import { PublicrelationsPage } from './publicrelations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicrelationsPageRoutingModule
  ],
  declarations: [PublicrelationsPage]
})
export class PublicrelationsPageModule {}
