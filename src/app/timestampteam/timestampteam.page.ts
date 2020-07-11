import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirebasefunctionService } from '../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-timestampteam',
  templateUrl: './timestampteam.page.html',
  styleUrls: ['./timestampteam.page.scss'],
})
export class TimestampteamPage implements OnInit {

  dataPersonnel
  fullname
  datatimestamp
  dataloading = false

  constructor(
    public route: NavController,
    public act: ActivatedRoute,
    public alertController: AlertController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  ngOnInit() {
    this.Personnel()
    this.getTimestamp()
  }

  Personnel(){
    let res:any = this.act.snapshot.paramMap.get('dataPersonnel');
    this.dataPersonnel = JSON.parse(res)
    this.fullname = this.dataPersonnel.personnel.personnel_fullname.personnel_prefix+this.dataPersonnel.personnel.personnel_fullname.personnel_firstname+" "+this.dataPersonnel.personnel.personnel_fullname.personnel_lastname
  }

  async getTimestamp(){
    this.dataloading = false
    var uid = this.dataPersonnel.uid
    let body = {
      uid:uid
    }
    const res:any = await this.firebaseAPI.getTimestamp(body)
    let itime = 0
    this.datatimestamp = {data:[]}
    res.data.forEach(datatimestamp => {
      var formatterday = new Intl.DateTimeFormat('th', {
        weekday: 'long',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
      var formattertime = new Intl.DateTimeFormat('th', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      const timestamp_in = new Date(datatimestamp.datatimestamp.timestamp_in._seconds * 1000);
      const datatimeinday = formatterday.format(timestamp_in)
      const datetimeintime = formattertime.format(timestamp_in)
      let datetimeouttime
      try {
        const timestamp_out = new Date(datatimestamp.datatimestamp.timestamp_out._seconds * 1000);
        datetimeouttime = formattertime.format(timestamp_out)
      } catch (error) {
        datetimeouttime = "ไม่มีข้อมูลเวลาออกงาน"
      }
      this.datatimestamp.data[itime] = {
        datatimein:{
          day:datatimeinday,
          time:datetimeintime
        },
        datatimeout:{
          time:datetimeouttime
        }
      }
      itime++
    });
    this.dataloading = true
  }

  doRefresh(event) {
    this.getTimestamp()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
  
  back(){
    this.route.navigateBack("/henchman")
  }
}
