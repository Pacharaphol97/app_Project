import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.page.html',
  styleUrls: ['./timestamp.page.scss'],
})
export class TimestampPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  time = [{name:'เวลาเข้างาน',time:'00/00/00 , 00:00'},{name:'เวลาออกงาน',time:'00/00/00 , 00:00'}]

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
