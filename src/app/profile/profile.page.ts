import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  IDPersonnel;
  Positionname;
  Prefix;
  Firstname;
  Lastname;
  Email;
  Number;

  constructor(
    public route: NavController,
  ) { }

  ngOnInit() {
    var dataPersonnel = JSON.parse(window.localStorage.getItem('@personnel'))
    this.IDPersonnel = dataPersonnel.personnel.personnel_id
    this.Prefix = dataPersonnel.personnel.personnel_fullname.personnel_prefix
    this.Firstname = dataPersonnel.personnel.personnel_fullname.personnel_firstname
    this.Lastname = dataPersonnel.personnel.personnel_fullname.personnel_lastname
    this.Positionname = dataPersonnel.position.position_name
    this.Email = dataPersonnel.personnel.personnel_email
    this.Number = dataPersonnel.personnel.personnel_tel
  }

  back(){
    this.route.navigateBack("/menu")
  }

}
