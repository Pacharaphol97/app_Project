import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddleavePage } from './addleave.page';

describe('AddleavePage', () => {
  let component: AddleavePage;
  let fixture: ComponentFixture<AddleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
