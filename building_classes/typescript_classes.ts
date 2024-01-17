


class Car {
  fuel: number;
  model: string;


  constructor(fuel = 0, model = 'Default Car') {
    this.fuel = fuel;
    this.model = model;
  }
}


const pinto = new Car();

// const pinto = new Car(23, 'Pinto');

console.log(pinto);
