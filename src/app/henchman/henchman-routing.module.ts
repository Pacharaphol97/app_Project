import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HenchmanPage } from './henchman.page';

const routes: Routes = [
  {
    path: '',
    component: HenchmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HenchmanPageRoutingModule {}
