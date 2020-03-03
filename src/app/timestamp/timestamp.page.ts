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

  time = [{name:'เวลาออกงาน',time:'14/02/2563 , 17:00'},{name:'เวลาเข้างาน',time:'14/02/2563 , 09:00'}]

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
