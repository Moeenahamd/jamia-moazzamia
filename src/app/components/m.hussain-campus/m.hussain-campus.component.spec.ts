import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MHussainCampusComponent } from './m.hussain-campus.component';

describe('MHussainCampusComponent', () => {
  let component: MHussainCampusComponent;
  let fixture: ComponentFixture<MHussainCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHussainCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MHussainCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
