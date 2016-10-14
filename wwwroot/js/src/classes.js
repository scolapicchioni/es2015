class Person{
    //let x = 5;
    //var x = 10;
    constructor(name="", surname=""){
        this.name = name;
        this.surname = surname;
    }

    sayHi(){
        return `Hi my name is ${this.name} ${this.surname}`;
    }

    method2(){
        console.log("doing stuff");
    }
}

class Student extends Person{
    constructor(id, name, surname){
        super(name, surname);
        this.id = id;
    }
    method3(){
        console.log("doing stuff");
    }
    method2(){
        super.method2();
        console.log("doing student stuff");
    }
}


function Animal(){
    this.name = "";
}

Animal.reign = "";

let a = new Animal();


class Dog extends Animal{

}

let p1 = new Person();
let p2 = new Person("Simona", "Colapicchioni");
p2.method2();
let s1 = new Student(5,"Mario", "Super");
s1.method3();

function f(classDefinition){
    return new classDefinition("simo", "hfjds");
}

f(class Person{constructor(name, surname){}})


class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() { return this.element.innerHTML; }
    set html(value) { this.element.innerHTML = value;}
}

let c1 = new CustomHTMLElement(document.getElementById("btn1"));
console.log(c1.html);
c1.html = "blabla";
