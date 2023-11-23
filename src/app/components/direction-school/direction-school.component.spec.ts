import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionSchoolComponent } from './direction-school.component';

describe('DirectionSchoolComponent', () => {
  let component: DirectionSchoolComponent;
  let fixture: ComponentFixture<DirectionSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
