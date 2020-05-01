import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/models/school';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {
  @Input() school: School;

  constructor() { }

  get School() {
    return this.school;
  }

  ngOnInit(): void {
  }

  GetAddress(address: Address) {
    return address && `${address.street}, ${address.suburb}, ${address.postcode} ${address.state}`;
  }
}
