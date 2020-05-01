import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SchoolService } from './services/school.service';
import { AddSchoolComponent } from './modal/add-school/add-school.component';
import { School } from './models/school';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Smart School Search';
  searchText: string;
  schoolList = new Array<School>();
  isLoading = false;

  get SchoolList() {
    return this.schoolList;
  }

  get IsLoading() {
    return this.isLoading;
  }

  ngOnInit() {
    this.isLoading = true;
    this.schoolService.getSchools().subscribe(data => {
      this.schoolList = [...data.map(e => {
        this.isLoading = false;
        const d = e.payload.doc.data();
        return new School(d["name"], d["address"], d["studentCount"]);
      })];
    });
  }

  constructor(private schoolService: SchoolService, private modalService: NgbModal) { }

  OpenAddModal() {
    this.modalService.open(AddSchoolComponent);
  }
}
