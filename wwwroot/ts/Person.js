export var Person = (function () {
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
//# sourceMappingURL=Person.js.map