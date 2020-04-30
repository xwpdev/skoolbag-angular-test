export class Address {
    street: string;
    suburb: string;
    postcode: string;
    state: string;

    constructor(street: string, suburb: string, postcode: string, state: string) {
        this.street = street;
        this.suburb = suburb;
        this.postcode = postcode;
        this.state = state;
    }
}