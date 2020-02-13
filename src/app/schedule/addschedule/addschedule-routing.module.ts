import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddschedulePage } from './addschedule.page';

const routes: Routes = [
  {
    path: '',
    component: AddschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddschedulePageRoutingModule {}
