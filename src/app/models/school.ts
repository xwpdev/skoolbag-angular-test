import { Address } from './address';

export class School {    
    name: string;
    address: Address;
    studentCount: number;

    constructor(name: string, address: Address, studentCount: number) {
        this.name = name;
        this.address = address;
        this.studentCount = studentCount;
    }
}