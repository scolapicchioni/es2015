// returns the sum of all parameters
function sum(...numbers){
    let total = 0;
    for(const number of numbers){
        total+=number;
    }
    return total;
}

// returns the sum of all parameters
let sum2 = (...numbers) => {
    let total = 0;
    for(const number of numbers){
        total+=number;
    }
    return total;
}

// writes ‘Hello you’ to the console,
// or ‘Hello <name>’ if a name is provided
function sayHello(name = "you"){
    console.log(`Hello ${name}`);
}

// writes ‘Hello you’ to the console,
// or ‘Hello <name>’ if a name is provided
let sayHello2 = (name = "you") => console.log(`Hello ${name}`);


console.log(`the sum is ${sum(10,20,30,40)}`);
console.log(`the sum2 is ${sum2(10,20,30,40)}`);

sayHello();
sayHello2();
sayHello("Simona");
sayHello2("Simona");


function create(name, surname, age){
    // return {
    //     name : name,
    //     surname : surname,
    //     age : age
    // }
    var name = "";
    return {
        name,
        surname,
        age
    }
}

var property = "";
var o = {
    property
}

const o2 = {
    name : "",
    surname : "",
    sayHi : function(){

    }
}

const o3 = {
    name : "",
    surname : "",
    sayHi(){

    }

}

function callServer(options){
    
}

callServer({url : ""});




!function(){
    function Person(){}

    return {
        Person : Person
    };
}();
