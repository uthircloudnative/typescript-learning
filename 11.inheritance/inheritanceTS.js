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
var Vehicle = /** @class */ (function () {
    function Vehicle(type, make, model, fuel, makeYear, price) {
        this.price = 0;
        this.type = type;
        this.make = make;
        this.model = model;
        this.fuel = fuel;
        this.makeYear = makeYear;
        this.price = price;
    }
    Vehicle.prototype.displayDetails = function () {
        console.log("Type: ".concat(this.type, ", Make: ").concat(this.make, ", Model: ").concat(this.model, ", Fuel: ").concat(this.fuel, ", Make Year: ").concat(this.makeYear, ", Price: ").concat(this.price));
    };
    Vehicle.prototype.getPrice = function () {
        return this.price;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(type, make, model, fuel, makeYear, price, numberOfDoors) {
        var _this = _super.call(this, type, make, model, fuel, makeYear, price) || this;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    Car.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Number of Doors: ".concat(this.numberOfDoors));
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(type, make, model, fuel, makeYear, price, payloadCapacity) {
        var _this = _super.call(this, type, make, model, fuel, makeYear, price) || this;
        _this.payloadCapacity = payloadCapacity;
        return _this;
    }
    Truck.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Payload Capacity: ".concat(this.payloadCapacity, " kg"));
    };
    return Truck;
}(Vehicle));
var car1 = new Car("Car", "Toyota", "Camry", "Petrol", 2020, 30000, 4);
var truck1 = new Truck("Truck", "Ford", "F-150", "Diesel", 2019, 40000, 1000);
car1.displayDetails();
truck1.displayDetails();
console.log("Car Price: $".concat(car1.getPrice()));
console.log("Truck Price: $".concat(truck1.getPrice()));
