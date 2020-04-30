import { Injectable } from "@angular/core";
import { School } from '../models/school';

@Injectable()
export class SchoolService {
    private schoolList = new Array<School>();

    addSchool(newSchool: School) {
        this.schoolList.push(newSchool)
    }

    getSchools() {
        return this.schoolList;
    }
}