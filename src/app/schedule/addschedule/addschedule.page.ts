import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.page.html',
  styleUrls: ['./addschedule.page.scss'],
})
export class AddschedulePage implements OnInit {
  @Input() Id:any;
  datenow:string = new Date().toISOString();
  message:String
  topic
  detail
  Date

  constructor(
    public modalcontroller: ModalController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  ngOnInit() {
  }

  async confirm(){
    try {
      let id = 1+this.Id
      this.message = ''

      var body = {
        id:id,
        uid:window.localStorage.getItem('@uid'),
        create_date:this.datenow,
        topic:this.topic,
        detail:this.detail,
        determine_date:this.Date
      }
      await this.firebaseAPI.createSchedule(body)
      this.modalcontroller.dismiss({dataSuccess:true});
    } catch (error) {
      this.message = "กรอกข้อมูลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง"
    }
  }

  back(){
    this.modalcontroller.dismiss({dataSuccess:false});
  }
}
