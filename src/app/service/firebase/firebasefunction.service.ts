import { Injectable } from '@angular/core';
import { firebaseFunction } from '../../../environments/firebase.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebasefunctionService {

  constructor(public httpclient: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('@token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  //ตรวจสอบเวลาบันทึกเข้างาน ออกงาน
  getTimestamp(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/gettimestamp',body).toPromise();
  }

  //ตรวจสอบข้อมูลพนักงาน
  getPersonnel(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/getPersonnel',body).toPromise();
  }

  //ตรวจสอบข้อมูลพนักงานในสังกัด
  getHenchman(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/getHenchman',body).toPromise();
  }

  //ดึงประเภทการลางานของพนักงาน
  getTypeleave(){
    return this.httpclient.get(firebaseFunction.functionURL +'/getTypeleave').toPromise();
  }

  //ขอข้อมูลการลางานของพนักงาน
  getLeave(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/getLeave',body).toPromise();
  }

  //เพิ่มข้อมูลการลางานของพนักงาน
  addLeave(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/createleave',body).toPromise();
  }

  //แก้ไขข้อมูลการลางาน
  editleave(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/editleave',body).toPromise();
  }

  //ยกเลิกคำขอการลางานของพนักงาน
  cancelLeave(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/cancelleave',body).toPromise();
  }

  //อนุมัติคำขอลางานของพนักงาน
  approveleave(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/approveleave',body).toPromise();
  }

  //ขอข้อมูลข่าวประชาสัมพันธ์
  getPublicRelations(){
    return this.httpclient.get(firebaseFunction.functionURL +'/getPublicRelations').toPromise();
  }

  //ขอกำหนดการต่าง ๆ
  getSchedule(){
    return this.httpclient.get(firebaseFunction.functionURL +'/getSchedule').toPromise();
  }

  //เพิ่มกำหนดการต่าง ๆ
  createSchedule(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/createSchedule',body).toPromise();
  }
}