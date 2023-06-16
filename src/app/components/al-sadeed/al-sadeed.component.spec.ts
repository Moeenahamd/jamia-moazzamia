import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlSadeedComponent } from './al-sadeed.component';

describe('AlSadeedComponent', () => {
  let component: AlSadeedComponent;
  let fixture: ComponentFixture<AlSadeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlSadeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlSadeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
