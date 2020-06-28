import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimestampteamPage } from './timestampteam.page';

describe('TimestampteamPage', () => {
  let component: TimestampteamPage;
  let fixture: ComponentFixture<TimestampteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimestampteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
