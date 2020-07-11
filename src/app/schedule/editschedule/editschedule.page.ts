import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.page.html',
  styleUrls: ['./editschedule.page.scss'],
})
export class EditschedulePage implements OnInit {

  @Input() data:any;
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
    this.topic = this.data.topic
    this.detail = this.data.detail
  }

  async confirm(){
    try {
      var body = {
        uid:this.data.uid,
        topic:this.topic,
        detail:this.detail,
        determine_date:this.Date
      }
      await this.firebaseAPI.editSchedule(body)
      this.modalcontroller.dismiss({dataSuccess:true});
    } catch (error) {
      this.message = "กรอกข้อมูลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง"
    }
  }

  back(){
    this.modalcontroller.dismiss({dataSuccess:false});
  }

}
