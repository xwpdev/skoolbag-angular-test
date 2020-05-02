import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolComponent } from './add-school.component';
import { School } from 'src/app/models/school';

describe('AddSchoolComponent', () => {
  let component: AddSchoolComponent;
  let fixture: ComponentFixture<AddSchoolComponent>;

  // const tempSchool: School = {
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSchoolComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
