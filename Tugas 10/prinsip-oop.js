// Encapsulation
// Enkapsulasi adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const person = new Person("John Doe");
console.log(person.getName());

// Abstraction
// Abtraksi adalah sebuah proses untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas atau perilaku penting dari objek tersebut.

class Car {
  constructor(car) {
    this.car = car;
  }

  #startEngine() {
    console.log(`${this.car} telah menyala`);
  }

  drive() {
    this.#startEngine();
    console.log(`${this.car} telah berjalan`);
  }
}

const car = new Car("BMW");
car.drive();

// Inheritance
// Inheritance adalah sebuah mekanisme dimana sebuah objek memiliki kemampuan untuk mewarisi sifat dari objek lain.

class Organism {
  constructor(name) {
    this.name = name;
  }

  breath() {
    console.log(`${this.name} sedang bernafas`);
  }
}

class Fish extends Organism {
  breath() {
    console.log(`${this.name} sedang bernafas melalui insang`);
  }
}

const fish = new Fish("Nemo");
fish.breath();

// Polymorphism
// Polymorphism adalah kemampuan sebuah objek untuk memiliki banyak bentuk.

class Vehicle {
  drive() {
    console.log("Driving a vehicle");
  }
}

class Truck extends Vehicle {
  drive() {
    console.log("Driving a truck");
  }
}

class Motorcycle extends Vehicle {
  drive() {
    console.log("Riding a motorcycle");
  }
}

const motorcycle = new Motorcycle();
motorcycle.drive();
