const myList = {
    [Symbol.iterator](){
        let internalList = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"];
        let i = 0;
        return {
            next(){
                let value = internalList[i];
                i++;
                let done = i>=internalList.length;
                return {
                    done,
                    value
                }
            }
        }
    }
}

const myList2 = {
    *[Symbol.iterator](){
        let internalList = ["lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato", "domenica"];
        // for(let i = 0;i<internalList.length;i++){
        //     yield internalList[i];
        // }
        yield *internalList;
    }
}

for(let item of myList2){

}

//let iterator = myList.[Symbol.iterator]()
//let object = iterator.next();
//object.done
//object.value

for(const item of myList){

}
let array = [...myList];

let italianDays = {
    *[Symbol.iterator](){
        console.log("first line of ScrollDays");
    yield "Lunedi";
    console.log("second line");
    yield "Martedi";
    console.log("third line");

    yield "Mercoledi";
    yield "Giovedi";
    yield "Venerdi";
    yield "Sabato";
    yield "Domenica";
    },
    *weekendDays(){
        yield "Sabato";
        yield "Domenica";
    }
}

for(const day of italianDays){

}

for(const day of italianDays.weekendDays()){

}


function* scrollDays(){
    console.log("first line of ScrollDays");
    yield "Lunedi";
    console.log("second line");
    yield "Martedi";
    console.log("third line");

    yield "Mercoledi";
    yield "Giovedi";
    yield "Venerdi";
    yield "Sabato";
    yield "Domenica";
}
for(const item of scrollDays()){
    console.log("this is the main and item is " + item);
}
