import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoazzamCollegeComponent } from './moazzam-college.component';

describe('MoazzamCollegeComponent', () => {
  let component: MoazzamCollegeComponent;
  let fixture: ComponentFixture<MoazzamCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoazzamCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoazzamCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
