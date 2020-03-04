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

  //ตรวจสอบข้อมูลพนักงาน
  getPersonnel(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/getPersonnel',body).toPromise();
  }

  //ตรวจสอบข้อมูลพนักงานในสังกัด
  getHenchman(body){
    return this.httpclient.post(firebaseFunction.functionURL +'/getHenchman',body).toPromise();
  }
}