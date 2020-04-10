import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    public firebaseAPI: FirebasefunctionService
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

  back(){
    this.route.navigateBack("/menu")
  }
}
