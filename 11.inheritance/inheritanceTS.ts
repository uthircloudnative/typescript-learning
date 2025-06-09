class Vehicle {

    type: string;
    make: string;
    model: string;
    fuel: string
    makeYear: number;
    price: number = 0;

    constructor(type: string, make: string, model: string, fuel: string, makeYear: number, price: number) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.fuel = fuel;
        this.makeYear = makeYear;
        this.price = price;
    }

    displayDetails(): void {
        console.log(`Type: ${this.type}, Make: ${this.make}, Model: ${this.model}, Fuel: ${this.fuel}, Make Year: ${this.makeYear}, Price: ${this.price}`);
    }

    getPrice(): number {
        return this.price;
    }

}

class Car extends Vehicle {

    numberOfDoors: number;

    constructor(type: string, make: string, model: string, fuel: string, makeYear: number, price: number, numberOfDoors: number) {
        super(type, make, model, fuel, makeYear, price);
        this.numberOfDoors = numberOfDoors;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Number of Doors: ${this.numberOfDoors}`);
    }

}

class Truck extends Vehicle {
    
    payloadCapacity: number;

    constructor(type: string, make: string, model: string, fuel: string, makeYear: number, price: number, payloadCapacity: number) {
        super(type, make, model, fuel, makeYear, price);
        this.payloadCapacity = payloadCapacity;
    }

    displayDetails(): void {
        super.displayDetails();
        console.log(`Payload Capacity: ${this.payloadCapacity} kg`);
    }

}


var car1 = new Car("Car", "Toyota", "Camry", "Petrol", 2020, 30000, 4);
var truck1 = new Truck("Truck", "Ford", "F-150", "Diesel", 2019, 40000, 1000);
car1.displayDetails();
truck1.displayDetails();
console.log(`Car Price: $${car1.getPrice()}`);
console.log(`Truck Price: $${truck1.getPrice()}`);