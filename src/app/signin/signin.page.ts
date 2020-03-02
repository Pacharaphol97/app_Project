import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email:any;
  password:any;
  message:String
  loading = true

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  async signin() {
    this.loading = false;
    this.message = ''
    try {
      const res:any = await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      console.log(res)
      if(res){
        window.localStorage.setItem('@token', res.user.ma)
        this.route.navigateForward('/menu')
        this.loading = true
      }
    }catch(error){
      this.loading = true
      this.message = "เข้าสู่ระบบไม่สำเร็จ ตรวจสอบผู้ใช้งานและรหัสผ่าน"
      throw error
    }
  
  }
}
