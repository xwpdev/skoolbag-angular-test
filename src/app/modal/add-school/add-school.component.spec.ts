import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AddSchoolComponent } from './add-school.component';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/models/school';
import { BrowserModule } from '@angular/platform-browser';

describe('AddSchoolComponent', () => {
  let component: AddSchoolComponent;
  let fixture: ComponentFixture<AddSchoolComponent>;

  const tempSchool: School = {
    name: "Dummy School",
    studentCount: 20,
    address: {
      street: "1st Lane",
      suburb: "Dummy Suburb",
      state: "Dummy State",
      postcode: "1111"
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      declarations: [AddSchoolComponent, AppComponent],
      providers: [NgbActiveModal, SchoolService],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddSchoolComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should be invalid when no data entered', () => {
    expect(component.AddSchoolForm.invalid).toBeTruthy();
  });

  fit('should trigger AddSchool method when click on Save button', () => {
    component.AddSchoolForm.controls["control_schoolName"].setValue(tempSchool.name);
    component.AddSchoolForm.controls["control_studentCount"].setValue(tempSchool.studentCount);
    component.AddSchoolForm.controls["control_addressStreet"].setValue(tempSchool.address.street);
    component.AddSchoolForm.controls["control_addressSuburb"].setValue(tempSchool.address.suburb);
    component.AddSchoolForm.controls["control_addressState"].setValue(tempSchool.address.state);
    component.AddSchoolForm.controls["control_addressPostalcode"].setValue(tempSchool.address.postcode);

    fixture.detectChanges();

    let spy = spyOn(component, 'AddSchool');

    const element = fixture.nativeElement.querySelector('#btnSave');
    console.log(element);
    element.click();

    expect(component.AddSchool).toHaveBeenCalledTimes(1);
  });
});
