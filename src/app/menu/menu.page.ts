import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  notifications(){
    this.route.navigateForward("/notifications")
  }

  publicrelations(){
    this.route.navigateForward("/publicrelations")
  }

  eventecalender(){
    this.route.navigateForward("/calender")
  }

  schedule(){
    this.route.navigateForward("/schedule")
  }

  leave(){
    this.route.navigateForward("/leave")
  }

  timestamp(){
    this.route.navigateForward("/timestamp")
  }

  setting(){
    this.route.navigateForward("/setting")
  }

  signout(){
    firebase.auth().signOut()
    window.localStorage.clear()
    this.route.navigateBack('/signin')
  }
}