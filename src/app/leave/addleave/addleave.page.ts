import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebasefunctionService } from '../../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.page.html',
  styleUrls: ['./addleave.page.scss'],
})
export class AddleavePage implements OnInit {
  @Input() Type:any;
  @Input() Id:any;

  datenow:string = new Date().toISOString();
  Typeleave:any
  Dateleave:any
  Dateleaveend:any
  Numberleave:any
  message:String

  constructor(
    public modalcontroller: ModalController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  ngOnInit() {
  }

  async confirm(){
    try {
      let id = 1+this.Id

      let typeid = this.Typeleave.split('.');

      let NDateleave = new Date(this.Dateleave);
      let Dateleaveend = NDateleave.setDate(NDateleave.getDate()+this.Numberleave);
      this.Dateleaveend = new Date(Dateleaveend).toISOString();

      var bodyaddLeave = {
        uid:window.localStorage.getItem('@uid'),
        id:id,
        typeid:typeid[0],
        leavedate:this.Dateleave,
        leavenumber:this.Numberleave
      }
      const res = await this.firebaseAPI.addLeave(bodyaddLeave)
      this.modalcontroller.dismiss();
    } catch (error) {
      this.message = "กรอกข้อมูลไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง"
    }
  }

  back(){
    this.modalcontroller.dismiss();
  }

}
