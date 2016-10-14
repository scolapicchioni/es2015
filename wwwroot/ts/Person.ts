export class Person{
    constructor(name: string){
        this.name = name;
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    sayHi():string{
        return `Hi my name is ${this.name}`;
    }   
}