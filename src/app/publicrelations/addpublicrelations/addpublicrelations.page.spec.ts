import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpublicrelationsPage } from './addpublicrelations.page';

describe('AddpublicrelationsPage', () => {
  let component: AddpublicrelationsPage;
  let fixture: ComponentFixture<AddpublicrelationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpublicrelationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpublicrelationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
