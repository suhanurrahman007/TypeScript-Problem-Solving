{
    class Car {
      make: string;
      model: string;
      year: number;

      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }

      displayInfo(): void {
        console.log(
          `Your car model is:  ${this.year} ${this.make} ${this.model}`
        );
      }
    }
    const myCar = new Car("Toyota", "Corolla", 2020);
    myCar.displayInfo();
}