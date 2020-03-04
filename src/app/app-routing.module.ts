import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./eventcalender/calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'addevent',
    loadChildren: () => import('./eventcalender/addevent/addevent.module').then( m => m.AddeventPageModule)
  },
  {
    path: 'publicrelations',
    loadChildren: () => import('./publicrelations/publicrelations/publicrelations.module').then( m => m.PublicrelationsPageModule)
  },
  {
    path: 'addpublicrelations',
    loadChildren: () => import('./publicrelations/addpublicrelations/addpublicrelations.module').then( m => m.AddpublicrelationsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'addschedule',
    loadChildren: () => import('./schedule/addschedule/addschedule.module').then( m => m.AddschedulePageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'addleave',
    loadChildren: () => import('./leave/addleave/addleave.module').then( m => m.AddleavePageModule)
  },
  {
    path: 'timestamp',
    loadChildren: () => import('./timestamp/timestamp.module').then( m => m.TimestampPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./settings/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
