import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { School } from 'src/app/models/school';
import { Address } from 'src/app/models/address';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

  control_schoolName: FormControl = new FormControl('');
  control_addressStreet: FormControl = new FormControl('');
  control_addressSuburb: FormControl = new FormControl('');
  control_addressPostalcode: FormControl = new FormControl('');
  control_addressState: FormControl = new FormControl('');
  control_studentCount: FormControl = new FormControl('');

  AddSchoolForm = new FormGroup({
    control_schoolName: this.control_schoolName,
    control_addressStreet: this.control_addressStreet,
    control_addressSuburb: this.control_addressSuburb,
    control_addressPostalcode: this.control_addressPostalcode,
    control_addressState: this.control_addressState,
    control_studentCount: this.control_studentCount,
  });

  constructor(public activeModal: NgbActiveModal, private schoolService: SchoolService) { }

  ngOnInit(): void {
  }

  AddSchool() {
    let newSchool = new School(
      this.AddSchoolForm.value["control_schoolName"], new Address(
        this.AddSchoolForm.value["control_addressStreet"],
        this.AddSchoolForm.value["control_addressSuburb"],
        this.AddSchoolForm.value["control_addressPostalcode"],
        this.AddSchoolForm.value["control_addressState"]
      ),
      this.AddSchoolForm.value["control_studentCount"]
    );

    this.schoolService.addSchool(newSchool);

    // clear form
    this.AddSchoolForm.reset();
    // close modal
    this.activeModal.close();
  }
}
