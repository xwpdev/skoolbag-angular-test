import { School } from '../models/school';
import { Address } from '../models/address';
import { Injectable } from '@angular/core';

@Injectable()
export class SchoolServiceMock {
    schools = Array<School>();
    constructor() {
        this.schools.push(new School("Test School 1", new Address("1 Street", "Suburb 1", "1000", "State 1"), 50));
        this.schools.push(new School("Test School 2", new Address("2 Street", "Suburb 2", "2000", "State 2"), 100));
        this.schools.push(new School("Test School 3", new Address("3 Street", "Suburb 3", "3000", "State 3"), 150));
    }

    getSchools() {
        return this.schools;
    }
}