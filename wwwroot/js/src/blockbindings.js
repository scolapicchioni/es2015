// console.log(x);
// //

// var x = 10;

// const y = {name : "Simona"};
// console.log(y);
// y.name = 20;
// y.age = 22;

// console.log(y);
// for(let i = 0; i< 10; i++){
//     console.log(i);
// }

// console.log(i);


// var functions = [];
// for (let i = 0; i < 10; i++) {
//     functions.push(function () { console.log(i); });
// }

// functions[3]();

// const person = {
//     address : "ablabla"
// };
// let age = 42;

// let name = `Simona ${person.address.toUpperCase()} and the blabla is ${age} `;
// console.log(name);

// function f2(parameter1="bla" /*+ parameter2*/, parameter2 = parameter1 + "hi"){
//     //parameter1 = parameter1 || "bla";
//     console.log(parameter1, parameter2);
// }

// f2();

// function f3(some, stuff, ...theRestOfYourArguments){
//     //arguments.length
//     console.log(theRestOfYourArguments);    
// }

// f3("",true, 2,3,4,5,"hi", {}, function(){});

// function f4(p1,p2,p3,p4){
//     console.log(p1,p2,p3,p4);
// }
// const myArray = [10,20,30,40];

// f4(...myArray);


// let f5 = () => {

// }

// document.getElementById("btn1", function(){
//     console.log("you clicked!!");
// });

// document.getElementById("btn1")
//     .addEventListener("click", ()=>console.log("you clicked!!"));

// const list = [1,2,3,4,5,6,7,8];

// const even = list.filter(function(item){
//     return item % 2 == 0;
// });

// const even2 = list.filter(item => item % 2 == 0);


var PageHandler = {

    id: "123456",

    init: function () {
        document.addEventListener("click", event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log("Handling " + type + " for " + this.id);
    }

};

PageHandler.init();

