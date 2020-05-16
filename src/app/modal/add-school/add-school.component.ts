import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { School } from 'src/app/models/school';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

  control_schoolName: FormControl = new FormControl('', [Validators.required]);
  control_addressStreet: FormControl = new FormControl('', [Validators.required]);
  control_addressSuburb: FormControl = new FormControl('', [Validators.required]);
  control_addressPostalcode: FormControl = new FormControl('', [Validators.required]);
  control_addressState: FormControl = new FormControl('', [Validators.required]);
  control_studentCount: FormControl = new FormControl('', [Validators.required, Validators.min(0)]);

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
    let newSchool: School = {
      name: this.AddSchoolForm.value["control_schoolName"],
      studentCount: this.AddSchoolForm.value["control_studentCount"],
      address: {
        street: this.AddSchoolForm.value["control_addressStreet"],
        suburb: this.AddSchoolForm.value["control_addressSuburb"],
        state: this.AddSchoolForm.value["control_addressState"],
        postcode: this.AddSchoolForm.value["control_addressPostalcode"],
      }
    }

    this.schoolService.addSchool(newSchool);

    this.AddSchoolForm.reset();
    this.activeModal.close();
  }
}
