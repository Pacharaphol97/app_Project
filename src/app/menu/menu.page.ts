import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebasefunctionService } from '../service/firebase/firebasefunction.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  prefix;
  firstname;
  lastname;
  positionname;
  permission;

  constructor(
    public firebaseAPI: FirebasefunctionService,
    public route: NavController
  ) { }

  async ngOnInit() {
    await this.personnel()
  }

  async personnel(){
    var bodypersonnel = {
      uid: window.localStorage.getItem('@uid')
    }
    const res:any = await this.firebaseAPI.getPersonnel(bodypersonnel)
    this.prefix = res.personnel.personnel_fullname.personnel_prefix
    this.firstname = res.personnel.personnel_fullname.personnel_firstname
    this.lastname = res.personnel.personnel_fullname.personnel_lastname
    this.positionname = res.position.position_name
    this.permission = res.position.permission
    window.localStorage.setItem('@personnel',JSON.stringify(res))
  }

  profile(){
    this.route.navigateForward("/profile")
  }

  henchman(){
    this.route.navigateForward("/henchman")
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