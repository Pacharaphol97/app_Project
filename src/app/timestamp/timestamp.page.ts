import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebasefunctionService } from '../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.page.html',
  styleUrls: ['./timestamp.page.scss'],
})
export class TimestampPage implements OnInit {

  dataloading:boolean
  datatimestamp

  constructor(
    public route: NavController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    await this.getTimestamp()
  }

  async getTimestamp(){
    this.dataloading = false
    var uid = window.localStorage.getItem('@uid')
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
    this.route.navigateBack("/menu")
  }
}
