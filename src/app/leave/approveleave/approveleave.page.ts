import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.page.html',
  styleUrls: ['./approveleave.page.scss'],
})
export class ApproveleavePage implements OnInit {

  fullname
  dataPersonnel
  dataLeave
  typeleavename
  ileave
  dataloading = false

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public alertController: AlertController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    this.Personnel();
    await this.getLeave();
  }

  Personnel(){
    let res:any = this.act.snapshot.paramMap.get('dataPersonnel');
    this.dataPersonnel = JSON.parse(res)
    this.fullname = this.dataPersonnel.personnel.personnel_fullname.personnel_prefix+this.dataPersonnel.personnel.personnel_fullname.personnel_firstname+" "+this.dataPersonnel.personnel.personnel_fullname.personnel_lastname
  }

  async getLeave(){
    this.typeleavename ='';
    this.dataLeave = ''
    this.ileave = 0

    const resType:any = await this.firebaseAPI.getTypeleave()
    this.typeleavename = resType.data

    var uid = this.dataPersonnel.uid
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
      
      const startdate = new Date(doc.dataleave.leave_date._seconds * 1000);
      const startday = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startdate)
      const startmonth = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startdate)
      const startyear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startdate)

      const enddata = startdate.setDate(startdate.getDate()+(doc.dataleave.leave_number-1));
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
        typeid:Typeid,
        type:Typename,
        day:doc.dataleave.leave_number,
        startdata:startday+'/'+startmonth+'/'+startyear,
        startdataiso:new Date(doc.dataleave.leave_date._seconds * 1000),
        enddata:endday+'/'+endmonth+'/'+endyear,
        status:messagestatus,
        icon:icon
      } 
      this.ileave++
    });
    this.dataloading = true
  }

  async approveleave(data){
    const alert = await this.alertController.create({
      header: 'ยืนยันการอนุมัติคำขอลางาน',
      message: 'ประเภท : ' + data.type 
      +'<br/> วันที่เริ่ม : ' +data.startdata
      +'<br/> วันที่สิ้นสุด : ' +data.enddata
      +'<br/> จำนวนวันลา : ' +data.day,
      buttons: [{
        text: 'อนุมัติ',
        handler: async() => {
          let body = {
            personneluid:this.dataPersonnel.uid,
            leaveuid:data.uid,
            approve:true
          }
          await this.firebaseAPI.approveleave(body)
          this.dataloading = false
          this.getLeave()
        }
      }, {
        text: 'ไม่อนุมัติ',
        handler: async() => {
          let body = {
            personneluid:this.dataPersonnel.uid,
            leaveuid:data.uid,
            approve:false
          }
          await this.firebaseAPI.approveleave(body)
          this.dataloading = false
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
    this.route.navigateBack("/henchman")
  }
}
