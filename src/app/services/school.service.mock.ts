import { School } from '../models/school';
import { Address } from '../models/address';
import { Injectable } from '@angular/core';

@Injectable()
export class SchoolServiceMock {
    schools = Array<School>();

    getSchools() {
        return this.schools;
    }
}