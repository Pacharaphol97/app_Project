import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  constructor(
    public route: NavController
  ) { }

  leave = [{type:'ลาพักร้อน',startdata:'00/00/0000',enddata:'00/00/0000',day:'0',status:'รอการอนุมัติ'},{type:'ลากิจ',startdata:'00/00/0000',enddata:'00/00/0000',day:'0',status:'ได้รับการอนุมัติ',approvedata:'00/00/0000 , 00:00'}]

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
