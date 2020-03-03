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

  leave = [{type:'ลาพักร้อน',startdata:'14/03/2563',enddata:'20/03/2563',day:'7',status:'รอการอนุมัติ'},{type:'ลากิจ',startdata:'17/02/2563',enddata:'17/02/2563',day:'1',status:'ได้รับการอนุมัติ',approvedata:'16/02/2563 , 15:43'}]

  ngOnInit() {
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
