import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'publicrelations',
    loadChildren: () => import('./publicrelations/publicrelations.module').then( m => m.PublicrelationsPageModule)
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
  {
    path: 'henchman',
    loadChildren: () => import('./henchman/henchman.module').then( m => m.HenchmanPageModule)
  },
  {
    path: 'editleave',
    loadChildren: () => import('./leave/editleave/editleave.module').then( m => m.EditleavePageModule)
  },  {
    path: 'approveleave',
    loadChildren: () => import('./leave/approveleave/approveleave.module').then( m => m.ApproveleavePageModule)
  },
  {
    path: 'timestampteam',
    loadChildren: () => import('./timestampteam/timestampteam.module').then( m => m.TimestampteamPageModule)
  },
  {
    path: 'editschedule',
    loadChildren: () => import('./schedule/editschedule/editschedule.module').then( m => m.EditschedulePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
