var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("Person", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(name) {
                    this.name = name;
                }
                Object.defineProperty(Person.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (v) {
                        this._name = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                Person.prototype.sayHi = function () {
                    return "Hi my name is " + this.name;
                };
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
System.register("Student", ["Person"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Person_1;
    var Student;
    return {
        setters:[
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }],
        execute: function() {
            Student = (function (_super) {
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
            }(Person_1.Person));
            exports_2("Student", Student);
        }
    }
});
//# sourceMappingURL=App.js.map