import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';
import { firebaseFunction } from 'src/environments/firebase.config';

@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.page.html',
  styleUrls: ['./editleave.page.scss'],
})
export class EditleavePage implements OnInit {
  @Input() Type:any;
  @Input() data:any;

  datenow:string = new Date().toISOString();
  Typeleave:any
  Dateleave:any
  Numberleave:any
  message:String

  constructor(
    public modalcontroller: ModalController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  ngOnInit() {
    this.Typeleave = this.data.typeid +'.'+this.data.type
    this.Numberleave = this.data.day
  }

  async confirm(){
    this.message = ''
    if(this.Dateleave) {
      let typeid = this.Typeleave.split('.');
      var bodyeditLeave = {
        uid:window.localStorage.getItem('@uid'),
        leaveid:this.data.uid,
        typeid:typeid[0],
        leavedate:this.Dateleave,
        leavenumber:this.Numberleave
      }
      try {
        const res = await this.firebaseAPI.editleave(bodyeditLeave)
        this.modalcontroller.dismiss({dataSuccess:true});
      } catch (error) {
        this.message = "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
      }
    } else{
      this.message = "กรอกข้อมูลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง"
    }
  }

  back(){
    this.modalcontroller.dismiss({dataSuccess:false})
  }

}
