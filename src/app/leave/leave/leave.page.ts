import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController,AlertController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

import { AddleavePage } from '../addleave/addleave.page';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  dataloading = false;
  typeleavename:any;
  dataLeave:any
  ileave:any;

  constructor(
    public route: NavController,
    public alertController: AlertController,
    public modalcontroller: ModalController,
    public popoverController: PopoverController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    await this.getLeave()
  }

  async getLeave(){
    this.typeleavename ='';
    this.dataLeave = ''
    this.ileave = 0

    const resType:any = await this.firebaseAPI.getTypeleave()
    this.typeleavename = resType.data

    var uid = window.localStorage.getItem('@uid')
    let body = {
      uid:uid
    }
    const res:any = await this.firebaseAPI.getLeave(body)
    this.dataLeave = {data:[]}
    res.data.forEach(doc => {
      let Typename = "ไม่ทราบประเภทการลางาน"
      const Typeid = doc.dataleave.type_id
      this.typeleavename.forEach(typename => {
        if(typename.id == Typeid){
          Typename = typename.type.type_leave
        }
      })
      
      const startdata = new Date(doc.dataleave.leave_date._seconds * 1000);
      const startday = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startdata)
      const startmonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startdata)
      const startyear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startdata)

      const enddata = startdata.setDate(startdata.getDate()+doc.dataleave.leave_number);
      const endday = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(enddata)
      const endmonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(enddata)
      const endyear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(enddata)

      let messagestatus
      let icon
      const status = doc.dataleave.approve_status
      switch (status) {
        case true:messagestatus = "ได้รับการอนุมัติ"; icon = true; break;
        case false:messagestatus = "ไม่ได้รับการอนุมัติ"; icon = true; break;
        default:messagestatus = "รอการอนุมัติ"; icon = false; break;
      }
      
      this.dataLeave.data[this.ileave] = {
        uid:doc.id,
        id:doc.dataleave.id,
        type:Typename,
        day:doc.dataleave.leave_number,
        startdata:startday+'/'+startmonth+'/'+startyear,
        enddata:endday+'/'+endmonth+'/'+endyear,
        status:messagestatus,
        icon:icon
      } 
      this.ileave++
    });
    this.dataloading = true
  }

  async addleave(){
    const modal = await this.modalcontroller.create({
      component: AddleavePage,
      componentProps: {
        Id:this.ileave,
        Type:this.typeleavename
      }
    });
     await modal.present();
     modal.onDidDismiss().then(() => {
      this.dataloading = false;
      this.getLeave()
     })
  }

  editleave(data){
    console.log(data)
  }

  async cancelleave(data){
    const alert = await this.alertController.create({
      header: 'ยืนยันการยกเลิกคำขอลางาน',
      message: 'ประเภท : ' + data.type 
      +'<br/> วันที่เริ่ม : ' +data.startdata
      +'<br/> วันที่สิ้นสุด : ' +data.enddata
      +'<br/> จำนวนวันลา : ' +data.day,
      buttons: [{
        text: 'ยืนยัน',
        handler: async() => {
          const body = {
            uid:window.localStorage.getItem('@uid'),
            leaveid:data.uid
          }
          this.dataloading = false;
          await this.firebaseAPI.cancelLeave(body)
          this.getLeave()
        }
      }, {
        text: 'ยกเลิก',
      }]
    });
    await alert.present();
  }

  doRefresh(event) {
    this.getLeave()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
