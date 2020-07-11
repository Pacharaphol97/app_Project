import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimestampteamPage } from './timestampteam.page';

const routes: Routes = [
  {
    path: '',
    component: TimestampteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimestampteamPageRoutingModule {}
