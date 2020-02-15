import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
