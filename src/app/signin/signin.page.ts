import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loading = true

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  async signin() {
    this.loading = false;
    this.route.navigateForward("/menu")
  }
}
