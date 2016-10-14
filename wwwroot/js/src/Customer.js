import { Person } from "./Person";
import { Bills } from "./Bills";
export class Customer extends Person{
    constructor(id, name, city){
        super(id, name, city);
        this.bills = new Bills();
    }
}


