import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveleavePage } from './approveleave.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveleavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveleavePageRoutingModule {}
