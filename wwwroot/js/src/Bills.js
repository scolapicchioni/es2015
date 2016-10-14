const privateBills = new WeakMap();
export class Bills{
    constructor(){
        privateBills.set(this,{
            paidbills: new Map(),
            unpaidbills: new Map(),
        });
    }    
    pay(billNumber) {
        const unpaid = privateBills.get(this).unpaidbills;
        const paid = privateBills.get(this).paidbills;
        const bill = unpaid.get(billNumber);
        unpaid.delete(billNumber);
        paid.set(bill.number, bill);
    }
    add(bill) {
        const unpaid = privateBills.get(this).unpaidbills;
        unpaid.set(bill.number, bill);
    }

    *paid(){
        for(let [,bill] of privateBills.get(this).paidbills.entries()){
            yield bill;
        }
    }
    *unpaid(){
        for(let [,bill] of privateBills.get(this).unpaidbills.entries()){
            yield bill;
        }
    }
}


 

