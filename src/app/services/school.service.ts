import { Injectable } from "@angular/core";
import { School } from '../models/school';
import { Address } from '../models/address';

@Injectable()
export class SchoolService {
    private schoolList = new Array<School>();
    constructor() {
        this.generateDummyData();
    }

    generateDummyData() {
        this.schoolList.push(new School("St Joseph's Primary School", new Address("26-36 Leopard Street", "Kangaroo Point", "4169", "QLD"), 50));
        this.schoolList.push(new School("Brisbane Grammar School", new Address("24 Gregory Terrace", "Brisbane", "4000", "QLD"), 60));
        this.schoolList.push(new School("Wahroonga Adventist School", new Address("181 Fox Valley Road", "Wahroonga", "2076", "NSW"), 20));
    }

    addSchool(newSchool: School) {
        this.schoolList.push(newSchool)
    }

    getSchools() {
        return this.schoolList;
    }
}