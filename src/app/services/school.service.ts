import { Injectable } from "@angular/core";

import { AngularFirestore } from '@angular/fire/firestore';

import { School } from '../models/school';
import { Address } from '../models/address';
import { Observable } from 'rxjs';

@Injectable()
export class SchoolService {
    private schoolList = new Array<School>();
    constructor(private firestore: AngularFirestore) { }

    addSchool(newSchool: School) {
        const school = {
            name: newSchool.name,
            studentCount: newSchool.studentCount,
            address: {
                street: newSchool.address.street,
                suburb: newSchool.address.suburb,
                postcode: newSchool.address.postcode,
                state: newSchool.address.state,
            }
        };
        return this.firestore.collection('schools').add(school);
    }

    getSchools(): Observable<any> {
        return this.firestore.collection('schools').snapshotChanges();
    }    
}