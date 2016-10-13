function CreateCustomer(id=0, name="", city=""){
    return {
        id,
        name,
        city,
        nrOfUnpaidBills : 0,
        buyStuff(){
            this.nrOfUnpaidBills++;
        }, 
        payBill(){
            this.nrOfUnpaidBills--;
        },
        badPayer(n=0){
            return this.nrOfUnpaidBills>n;
        },
        toString(){
            return `(${this.id}) ${this.name} - ${this.city}`;
        }
    };
}

let CreateCustomer2 = (id=0, name="", city="") =>{

    return {
        id,
        name,
        city,
        nrOfUnpaidBills : 0,
        buyStuff: () => this.nrOfUnpaidBills++, 
        payBill: () => this.nrOfUnpaidBills--,
        badPayer: (n=0) => this.nrOfUnpaidBills>n,
        toString: () => `(${this.id}) ${this.name} - ${this.city}`        
    };
}

const c1 = CreateCustomer(1,"Simo")
console.log(c1);
c1.badPayer();
c1.badPayer();
c1.buyStuff();
c1.buyStuff();
c1.buyStuff();
console.log(c1);
const c2 = CreateCustomer2(1,"Simo")
console.log(c2);
c2.badPayer();
c2.buyStuff();
c2.buyStuff();
c2.buyStuff();
console.log(c2);




function createSomething({url="", type="GET", headers={}, data} = {}){
    
}

createSomething({type: "POST"})

createSomething();

// function createSomething(options){
//     options = {
        
//     }
//     options = options || {};
//     options.url = options.url || "";
//     options.type = options.url || "GET";
//     options.headers = options.headers || {};
//     options.data = options.data || undefined;


// }



createSomething("",undefined, undefined, {});


