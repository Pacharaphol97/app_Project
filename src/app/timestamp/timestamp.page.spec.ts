import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimestampPage } from './timestamp.page';

describe('TimestampPage', () => {
  let component: TimestampPage;
  let fixture: ComponentFixture<TimestampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimestampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
