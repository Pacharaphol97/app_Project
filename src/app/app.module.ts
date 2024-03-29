import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FirebasefunctionService } from './service/firebase/firebasefunction.service'

import { AddleavePageModule } from './leave/addleave/addleave.module'
import { EditleavePageModule } from './leave/editleave/editleave.module'
import { AddschedulePageModule } from './schedule/addschedule/addschedule.module'
import { EditschedulePageModule } from './schedule/editschedule/editschedule.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    AddleavePageModule,EditleavePageModule,AddschedulePageModule,EditschedulePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebasefunctionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
