import { Injectable } from "@angular/core";

import { AngularFirestore } from '@angular/fire/firestore';

import { School } from '../models/school';
import { Observable } from 'rxjs';

@Injectable()
export class SchoolService {
    constructor(private firestore: AngularFirestore) { }

    addSchool(newSchool: School) {
        // creating JS object from TS model to be compatible with Firebase
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