import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditleavePage } from './editleave.page';

describe('EditleavePage', () => {
  let component: EditleavePage;
  let fixture: ComponentFixture<EditleavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditleavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditleavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
