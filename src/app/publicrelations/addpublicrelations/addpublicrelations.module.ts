import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpublicrelationsPageRoutingModule } from './addpublicrelations-routing.module';

import { AddpublicrelationsPage } from './addpublicrelations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpublicrelationsPageRoutingModule
  ],
  declarations: [AddpublicrelationsPage]
})
export class AddpublicrelationsPageModule {}
