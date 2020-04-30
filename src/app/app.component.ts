import { Component } from '@angular/core';
import { SchoolService } from './services/school.service';

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

  constructor(private schoolService: SchoolService) { }
}
