var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Person } from "./Person";
export var Student = (function (_super) {
    __extends(Student, _super);
    function Student(studentId, name) {
        _super.call(this, name);
        this._studentId = studentId;
    }
    Object.defineProperty(Student.prototype, "studentId", {
        get: function () {
            return this._studentId;
        },
        set: function (v) {
            this._studentId = v;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
//# sourceMappingURL=Student.js.map