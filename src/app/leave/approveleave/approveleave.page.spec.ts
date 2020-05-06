import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveleavePage } from './approveleave.page';

describe('ApproveleavePage', () => {
  let component: ApproveleavePage;
  let fixture: ComponentFixture<ApproveleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveleavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
