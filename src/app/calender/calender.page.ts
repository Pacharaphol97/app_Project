import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
import { CalendarModal,CalendarComponentOptions,CalendarModalOptions } from 'ion2-calendar'

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  dateCalendar:string[];
  type: 'string';

  optionsCalendar: CalendarComponentOptions = {
    pickMode: 'multi',
  };

  constructor(
    public route: NavController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onSelect(event){
    console.log(event)
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
