import { Component, OnInit } from '@angular/core';
import { NavController,ActionSheetController } from '@ionic/angular';
import { FirebasefunctionService } from '../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-henchman',
  templateUrl: './henchman.page.html',
  styleUrls: ['./henchman.page.scss'],
})
export class HenchmanPage implements OnInit {

  dataHenchman
  loading = false

  constructor(
    public route: NavController,
    public firebaseAPI: FirebasefunctionService,
    public actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    await this.henchman()
  }

  async henchman(){
    var bodyhenchman = {
      uid: window.localStorage.getItem('@uid')
    }
    const res:any = await this.firebaseAPI.getHenchman(bodyhenchman)
    this.dataHenchman = res
    
  }

  async presentActionSheet(data) {
    let fullname = data.personnel.personnel_fullname.personnel_prefix+data.personnel.personnel_fullname.personnel_firstname+" "+data.personnel.personnel_fullname.personnel_lastname
    const actionSheet = await this.actionSheetController.create({
      header: fullname,
      buttons: [{
        text: 'ดูข้อมูลคำขอลางาน',
        icon: 'document',
        handler: () => {
          this.route.navigateForward(["/approveleave",{ dataPersonnel: JSON.stringify(data) }])
        }
      },
      {
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
