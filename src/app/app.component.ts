import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SchoolService } from './services/school.service';
import { AddSchoolComponent } from './modal/add-school/add-school.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Smart School Search';
  searchText: string;

  get SchoolList() {
    return this.schoolService.getSchools();
  }

  constructor(private schoolService: SchoolService, private modalService: NgbModal) { }

  OpenAddModal() {
    const modalRef = this.modalService.open(AddSchoolComponent);
  }
}
