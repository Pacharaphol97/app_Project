import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicrelationsPage } from './publicrelations.page';

const routes: Routes = [
  {
    path: '',
    component: PublicrelationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicrelationsPageRoutingModule {}
