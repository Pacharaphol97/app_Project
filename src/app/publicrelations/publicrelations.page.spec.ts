import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicrelationsPage } from './publicrelations.page';

describe('PublicrelationsPage', () => {
  let component: PublicrelationsPage;
  let fixture: ComponentFixture<PublicrelationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicrelationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicrelationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
