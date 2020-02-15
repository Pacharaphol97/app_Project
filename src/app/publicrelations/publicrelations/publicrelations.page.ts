import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-publicrelations',
  templateUrl: './publicrelations.page.html',
  styleUrls: ['./publicrelations.page.scss'],
})
export class PublicrelationsPage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  publicrelations = [{topic:'ข่าวสารครั้งที่ 1 ',details:'ทดสอบการประการข่าวประชาสัมพันธ์ ขอให้พนักงานทุกท่าน ตรวจสอบข้อมูลส่วนตัวว่าถูกต้องหรือไม่ หากไม่ถูกต้องให้แจ้งกับหัวหน้างานเพื่อแก้ไขข้อมูลส่วนตัวให้ถูกต้อง',date:'00/00/0000 , 00:00'},{topic:'ข่าวสารครั้งที่ 2',details:'ทดสอบการประการข่าวประชาสัมพันธ์',date:'00/00/0000 , 00:00'}]

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
