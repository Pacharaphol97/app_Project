import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimestampteamPageRoutingModule } from './timestampteam-routing.module';

import { TimestampteamPage } from './timestampteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimestampteamPageRoutingModule
  ],
  declarations: [TimestampteamPage]
})
export class TimestampteamPageModule {}
