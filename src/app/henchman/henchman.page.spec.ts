import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HenchmanPage } from './henchman.page';

describe('HenchmanPage', () => {
  let component: HenchmanPage;
  let fixture: ComponentFixture<HenchmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenchmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HenchmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
