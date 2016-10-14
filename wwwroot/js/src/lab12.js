import {Customer} from "./Customer";

let c1 = new Customer(1,"Mario","Roma");
c1.bills.add({number: "ab123", amount : 123});
c1.bills.add({number: "cd456", amount : 456});
c1.bills.add({number: "ef789", amount : 789});
c1.bills.add({number: "gh012", amount : 128});
c1.bills.add({number: "ij386", amount : 946});
c1.bills.add({number: "ij386", amount : 1000});

console.log("*********unpaid***********");
for(let b of c1.bills.unpaid()){
    console.log(b.number, b.amount);
}
console.log("*********paid***********");
for(let b of c1.bills.paid()){
    console.log(b.number, b.amount);
}

c1.bills.pay("ef789");
c1.bills.pay("cd456");

console.log("*********unpaid***********");
for(let b of c1.bills.unpaid()){
    console.log(b.number, b.amount);
}

console.log("*********paid***********");
for(let b of c1.bills.paid()){
    console.log(b.number, b.amount);
}
