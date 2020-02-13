import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddschedulePage } from './addschedule.page';

describe('AddschedulePage', () => {
  let component: AddschedulePage;
  let fixture: ComponentFixture<AddschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddschedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
