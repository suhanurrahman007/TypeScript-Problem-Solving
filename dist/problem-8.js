"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        displayInfo() {
            console.log(`Your car model is:  ${this.year} ${this.make} ${this.model}`);
        }
    }
    const myCar = new Car("Toyota", "Corolla", 2020);
    myCar.displayInfo();
}
