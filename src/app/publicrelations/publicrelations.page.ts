import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebasefunctionService } from '../service/firebase/firebasefunction.service';

@Component({
  selector: 'app-publicrelations',
  templateUrl: './publicrelations.page.html',
  styleUrls: ['./publicrelations.page.scss'],
})
export class PublicrelationsPage implements OnInit {

  dataloading = false;
  dataPublicRelations:any;

  constructor(
    public route: NavController,
    public firebaseAPI: FirebasefunctionService
  ) { }

  async ngOnInit() {
    await this.getPublicRelations()
  }

  async getPublicRelations(){
    this.dataPublicRelations = ''

    const res:any = await this.firebaseAPI.getPublicRelations()
    this.dataPublicRelations = {data:[]}
    let i = 0
    res.data.forEach(doc => {
      const date = new Date(doc.PublicRelations.publicrelations_date._seconds * 1000);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
      const hour = new Intl.DateTimeFormat('en', { hour: 'numeric',hour12: false }).format(date)
      const minute = new Intl.DateTimeFormat('en', { minute: 'numeric',hour12: false }).format(date)

      this.dataPublicRelations.data[i] = {
        topic:doc.PublicRelations.publicrelations_topic,
        details:doc.PublicRelations.publicrelations_detail,
        date:day+"/"+month+"/"+year+" , "+hour+":"+minute
      }
      i++
    });
    this.dataloading = true
  }

  doRefresh(event) {
    this.getPublicRelations()
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  back(){
    this.route.navigateBack("/menu")
  }
}
