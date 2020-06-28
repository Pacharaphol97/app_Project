import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,AlertController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

import { AddschedulePage } from '../addschedule/addschedule.page'
import { EditschedulePage } from '../editschedule/editschedule.page'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dataSchedule
  dataloading = false
  i
  showaddschedule = true

  constructor(
    public route: NavController,
    public alertController: AlertController,
    public modalcontroller: ModalController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    await this.getSchedule()
    this.Permission()
  }

  async getSchedule(){
    this.i = 0
    this.dataSchedule = {data:[]}
    let resSchedule:any = await this.firebaseAPI.getSchedule()
    resSchedule.data.forEach(async doc => {
      const date = new Date(doc.Schedule.scheduledetermine_date._seconds * 1000);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
      const hour = new Intl.DateTimeFormat('en', { hour: 'numeric',hour12: false }).format(date)
      const minute = new Intl.DateTimeFormat('en', { minute: 'numeric',hour12: false }).format(date)

      let res:any = await this.firebaseAPI.getPersonnel({uid:doc.Schedule.personnel_uid})
      let personnel = res.personnel.personnel_fullname.personnel_prefix+res.personnel.personnel_fullname.personnel_firstname+" "+res.personnel.personnel_fullname.personnel_lastname

      let icon = true
      if(doc.Schedule.personnel_uid == window.localStorage.getItem('@uid')){
        icon = false
      }

      this.dataSchedule.data[this.i] = {
        uid:doc.id,
        id:doc.Schedule.schedule_id,
        topic:doc.Schedule.schedule_topic,
        detail:doc.Schedule.schedule_detail,
        determine:day+"/"+month+"/"+year+" "+hour+":"+minute,
        determineiso:doc.Schedule.scheduledetermine_date._seconds,
        personnel:personnel,
        icon:icon
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

 async editSchedule(item){
  const modal = await this.modalcontroller.create({
    component: EditschedulePage,
    componentProps: {
      data:item
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

 async deleteSchedule(data){
  const alert = await this.alertController.create({
    header: 'ยืนยันการลบกำหนดการ',
    message: 'หัวข้อ : ' + data.topic,
    buttons: [{
      text: 'ยืนยัน',
      handler: async() => {
        const body = {
          uid:data.uid
        }
        this.dataloading = false;
        await this.firebaseAPI.deleteSchedule(body)
        this.getSchedule()
      }
    }, {
      text: 'ยกเลิก',
    }]
  });
  await alert.present();
}

  Permission(){
    let personnel = JSON.parse(window.localStorage.getItem('@personnel'))
    console.log(personnel)
    switch (personnel.position.permission) {
      case "manager":
        this.showaddschedule = false
        break;
      case "leader":
        this.showaddschedule = false
        break;
      default:
        this.showaddschedule = true
        break;
    }
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
