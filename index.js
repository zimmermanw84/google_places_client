var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Human = (function () {
    function Human(age, name) {
        this.age = age;
        this.name = name;
    }
    Object.defineProperty(Human.prototype, "getAge", {
        get: function () { return this.age; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getName", {
        get: function () { return this.name; },
        enumerable: true,
        configurable: true
    });
    Human.prototype.membersToString = function () {
        var loggedUser = "Hey my name is " + this.name + " and I'am " + this.age + " years old";
        console.log(loggedUser);
    };
    return Human;
})();
var Webmaster = (function (_super) {
    __extends(Webmaster, _super);
    function Webmaster(name, age, main) {
        _super.call(this, age, name);
        this.skills = ['Nodejs', 'Typescript', 'MySql'];
        this.mainSkill = this.skills[main];
    }
    Webmaster.prototype.skillToString = function () {
        var loggedSkill = "I am really good at " + this.mainSkill + "!";
        console.log(loggedSkill);
    };
    return Webmaster;
})(Human);
var SomeHuman = new Human(19, 'Billy');
SomeHuman.membersToString();
var Walt = new Webmaster('Walt', 31, 2);
Walt.membersToString();
Walt.skillToString();
