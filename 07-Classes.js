var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // ----------------------- Classes ------------------------
var Airpod = /** @class */ (function () {
    function Airpod() {
        this.price = 25000;
        this.image = "images/airpod";
        this.color = "white";
    }
    Airpod.prototype.playMusic = function () {
        console.log("music playing...");
    };
    Airpod.prototype.switchMode = function (mode) {
        console.log(mode);
    };
    return Airpod;
}());
var airpod = new Airpod();
airpod.playMusic();
// // ------------------------------------------------------------------------
var AirConditioner = /** @class */ (function () {
    function AirConditioner() {
        this.color = 'white';
        this.category = "ac";
        this.company = "voltas";
        this.temperature = 22;
    }
    AirConditioner.prototype.turOn = function (name) {
        console.log("turning on ".concat(name, "..."));
        console.log("turn on ".concat(name, "."));
    };
    AirConditioner.prototype.turOff = function (name) {
        console.log("turning off ".concat(name, "..."));
        console.log("turn off ".concat(name, "."));
    };
    AirConditioner.prototype.raiseTemperature = function () {
        this.temperature++;
        console.log("temperature raised by 1: " + this.temperature);
    };
    AirConditioner.prototype.decreaseTemperature = function () {
        this.temperature--;
        console.log("temperature decrease by 1: " + this.temperature);
    };
    return AirConditioner;
}());
var ac = new AirConditioner();
ac.turOn("ac");
ac.turOff("ac");
ac.raiseTemperature();
ac.decreaseTemperature();
var Pendrive = /** @class */ (function () {
    function Pendrive() {
        this.company = "hp";
        this.price = 1200;
        this.data = null;
    }
    Pendrive.prototype.putData = function (data) {
        console.log("putting some data ".concat(data));
        this.data = data;
    };
    Pendrive.prototype.getData = function () {
        console.log("getting some data ".concat(this.data));
    };
    return Pendrive;
}());
var pendrive = new Pendrive();
pendrive.putData("12");
pendrive.getData();
// // -------------------------- Constructor --------------------------
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Ashwini");
console.log(person.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(10, 20);
console.log(myRect.getArea());
var Rectanglee = /** @class */ (function () {
    function Rectanglee(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectanglee.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectanglee;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectanglee));
var mySqq = new Square(20);
console.log(mySqq.getArea());
var Rectanglle = /** @class */ (function () {
    function Rectanglle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectanglle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectanglle.prototype.toString = function () {
        return "Reactangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectanglle;
}());
var Squaree = /** @class */ (function (_super) {
    __extends(Squaree, _super);
    function Squaree(width) {
        return _super.call(this, width, width) || this;
    }
    Squaree.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Squaree;
}(Rectanglle));
var mySq = new Squaree(20);
console.log(mySq.toString());
// // ---------------------------- Abstract classes ----------------------------------
// // Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea, "]");
    };
    return Polygon;
}());
var Reactangles = /** @class */ (function (_super) {
    __extends(Reactangles, _super);
    function Reactangles(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Reactangles.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Reactangles;
}(Polygon));
var myRecta = new Reactangles(10, 20);
console.log(myRecta.getArea());
