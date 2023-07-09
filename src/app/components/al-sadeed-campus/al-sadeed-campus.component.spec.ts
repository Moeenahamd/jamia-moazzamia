import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlSadeedCampusComponent } from './al-sadeed-campus.component';

describe('AlSadeedCampusComponent', () => {
  let component: AlSadeedCampusComponent;
  let fixture: ComponentFixture<AlSadeedCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlSadeedCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlSadeedCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
