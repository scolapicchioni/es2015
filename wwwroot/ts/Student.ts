import {Person} from "./Person";
export class Student extends Person{
    constructor(studentId:number, name:string){
        super(name);
        this._studentId = studentId;
    }
    
    private _studentId : number;
    public get studentId() : number {
        return this._studentId;
    }
    public set studentId(v : number) {
        this._studentId = v;
    }
    
} 