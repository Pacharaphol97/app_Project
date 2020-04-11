import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditleavePageRoutingModule } from './editleave-routing.module';

import { EditleavePage } from './editleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditleavePageRoutingModule
  ],
  declarations: [EditleavePage]
})
export class EditleavePageModule {}
