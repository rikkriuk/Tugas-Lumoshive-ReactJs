// S - Single Responsibility Principle
// Class Employee hanya memiliki satu tanggung jawab, yaitu mengelola data karyawan.
class Employee {
  // property
  #name;
  #role;
  #salary;
  constructor(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
  }

  // method
  getDetails() {
    return `Name: ${this.#name}, Role: ${this.#role}, Salary: ${this.#salary}`;
  }
}

// O - Open/Closed Principle / Inheritance
// Bisa menambahkan fitur baru tanpa mengubah class Employee
class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, "Manager", salary);
    this.teamSize = teamSize; // Bentuk mondifikasi dari class Employee
  }
}

// L - Liskov Substitution Principle
// Setiap subclass manager bisa menggantikan superclass Employee tanpa masalah
function printEmployeeDetails(employee) {
  // Polymorphism / Bentuk Abstraksi
  console.log(employee.getDetails());
}

const employee = new Employee("John Doe", "Developer", 5000); // Parentclass / superclass
const manager = new Manager("Jane Smith", 10000, 5); // Modifikasi

printEmployeeDetails(employee);
printEmployeeDetails(manager);

// I - Interface Segregation Principle
// Simulasi class untuk memisahkan interface dari class lain dan sesuai kebutuhan
class Printable {
  print() {
    console.log("Printing...");
  }
}

class EmployeeReport extends Printable {
  constructor(employee) {
    super();
    this.employee = employee;
  }

  // Overide
  print() {
    console.log(`Printing Report for ${this.employee.getDetails()}`);
  }
}

const report = new EmployeeReport(employee);
report.print();

// D - Dependency Inversion Principle
// Report sevice hanya memanggil printer, tidak peduli dari mana itu berasal
class ReportService {
  constructor(printer) {
    this.printer = printer;
  }

  generateReport() {
    this.printer.print();
  }
}

const print = new Printable();
const reportService = new ReportService(report);
reportService.generateReport();
