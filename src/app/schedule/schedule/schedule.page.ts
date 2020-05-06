import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,AlertController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

import { AddschedulePage } from '../addschedule/addschedule.page'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dataSchedule
  dataloading = false
  i

  constructor(
    public route: NavController,
    public alertController: AlertController,
    public modalcontroller: ModalController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    await this.getSchedule()
  }

  async getSchedule(){
    this.i = 0
    this.dataSchedule = {data:[]}
    let resSchedule:any = await this.firebaseAPI.getSchedule()
  
    resSchedule.data.forEach(doc => {
      const date = new Date(doc.Schedule.scheduledetermine_date._seconds * 1000);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
      const hour = new Intl.DateTimeFormat('en', { hour: 'numeric',hour12: false }).format(date)
      const minute = new Intl.DateTimeFormat('en', { minute: 'numeric',hour12: false }).format(date)

      this.dataSchedule.data[this.i] = {
        uid:doc.id,
        id:doc.Schedule.schedule_id,
        topic:doc.Schedule.schedule_topic,
        detail:doc.Schedule.schedule_detail,
        determine:day+"/"+month+"/"+year+" "+hour+":"+minute
      }
      this.i++
    });
    this.dataloading = true
  }

 async addschedule(){
  const modal = await this.modalcontroller.create({
    component: AddschedulePage,
    componentProps: {
      Id:this.i
    }
  });
   await modal.present();
   modal.onDidDismiss().then(res => {
     if(res.data.dataSuccess){
      this.dataloading = false;
      this.getSchedule()
     }
   })
 }

  back(){
    this.route.navigateBack("/menu")
  }
}
