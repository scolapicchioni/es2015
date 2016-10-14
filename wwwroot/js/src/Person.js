export class Person {
    constructor(id=0, name="", city=""){
        if(new.target===Person) throw new Error("Person is abstract!");
        this.id = id;
        this.name = name;
        this.city = city;
    }
}
var x;

