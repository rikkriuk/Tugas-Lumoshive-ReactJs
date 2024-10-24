// Single Responsibility Principle (SRP)
// Enkapsulasi
class Product {
  #name;
  #price;
  #stock;
  constructor(name, price, stock) {
    this.#name = name;
    this.#price = price;
    this.#stock = stock;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get stock() {
    return this.#stock;
  }

  set name(name) {
    this.#name = name;
  }

  set price(price) {
    this.#price = price;
  }

  set stock(stock) {
    this.#stock = stock;
  }

  getDetails() {
    return `Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}`;
  }
}

// Open/Closed Principle (OCP)
// Inheritance
class DigitalProduct extends Product {
  constructor(name, price, fileSize) {
    super(name, price, 1000000000);
    this.fileSize = fileSize;
  }

  getInfo() {
    return `Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.fileSize}`;
  }
}

class Transaction {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Abstraksi
  buyProduct() {
    if (this.product.stock >= this.quantity) {
      this.product.stock -= this.quantity;
      return `You have bought ${this.quantity} ${
        this.product.name
      }(s) for a total of ${this.totalPrice()}`;
    } else {
      return `Sorry, we don't have enough stock for ${this.product.name}`;
    }
  }

  totalPrice() {
    return this.product.price * this.quantity;
  }
}

// Interface Segregation Principle (ISP)
class Printer {
  print() {
    console.log("Printing...");
  }
}

class Report extends Printer {
  constructor(transaction) {
    super();
    this.transaction = transaction;
  }

  // Polimorfisme
  print() {
    const report = this.transaction.map(
      (item, i) =>
        `Transaksi ${i + 1}: ${item.product.name} - Total: ${item.totalPrice()}`
    );

    return report.join("\n");
  }
}

// Dependency Inversion Principle (DIP)
class ReportGenerator {
  constructor(printer) {
    this.printer = printer;
  }

  generate() {
    return this.printer.print();
  }
}

const handphone = new Product("Samsung Galaxy S23", 10000000, 100);
const laptop = new Product("Laptop", 30000000, 50);

// Liskov Substitution Principle (LSP)
const digitalProduct = new DigitalProduct("E-book", 50000, 500);

const transaction1 = new Transaction(laptop, 1);
const transaction2 = new Transaction(digitalProduct, 1);

const report = new Report([transaction1, transaction2]);

const reportGenerator = new ReportGenerator(report);
console.log(reportGenerator.generate());
