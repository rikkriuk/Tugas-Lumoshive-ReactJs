// Sistem Pengelolaan Kendaraan Transportasi Umum

class Transport {
  constructor(type, pricePerKm) {
    this.type = type;
    this.pricePerKm = pricePerKm;
  }

  calculateFare(distance) {
    return distance * this.pricePerKm;
  }
}

class Bus extends Transport {
  constructor() {
    super("Bus", 2000);
  }

  calculateFare(distance) {
    let fare = super.calculateFare(distance);
    if (distance > 50) {
      fare *= 0.85; // diskon 15%
    }

    return fare;
  }
}

class Taksi extends Transport {
  constructor() {
    super("Taksi", 3500);
    this.fixedCharge = 10000;
  }

  calculateFare(distance) {
    return this.fixedCharge + super.calculateFare(distance);
  }
}

class Angkot extends Transport {
  constructor() {
    super("Angkot", 5000);
  }

  calculateFare() {
    return this.pricePerKm;
  }
}

const transports = [new Bus(), new Taksi(), new Angkot()];
function displayFare(distance) {
  transports.map((transport) => {
    console.log(
      `Biaya perjalanan dengan ${
        transport.type
      } untuk ${distance} adalah ${transport.calculateFare(distance)}`
    );
  });
}

console.log("\n=======Soal 1=======\n");
displayFare(30);
console.log("\n=====================\n");
displayFare(70);

// Sistem Pengelolaan Reservasi Hotel

class Room {
  constructor(type, pricePerNight, facility) {
    this.type = type;
    this.pricePerNight = pricePerNight;
    this.facility = facility;
  }

  calculateTotalPrice(nights) {
    return this.pricePerNight * nights;
  }
}

class StandardRoom extends Room {
  constructor() {
    super("Standard Room", 500000);
  }
}

class DeluxeRoom extends Room {
  constructor() {
    super("Deluxe Room", 1000000, "Sarapan");
  }
}

class SuiteRoom extends Room {
  constructor() {
    super("Suite Room", 2000000);
  }

  calculateTotalPrice(nights) {
    let totalPrice = super.calculateTotalPrice(nights);
    if (nights > 3) {
      totalPrice *= 0.9; // diskon 10%
      this.facility = "Akses kolam renang";
    }

    return totalPrice;
  }
}

const rooms = [new StandardRoom(), new DeluxeRoom(), new SuiteRoom()];

const displayRoomPrice = (nights) => {
  rooms.map((room) => {
    console.log(
      `Harga ${
        room.type
      } untuk ${nights} malam adalah ${room.calculateTotalPrice(
        nights
      )} dengan fasilitas ${room.facility || "tidak ada"}`
    );
  });
};

console.log("\n=======Soal 2=======\n");
displayRoomPrice(2);
console.log("\n=====================\n");
displayRoomPrice(5);

// Sistem Inventarisasi Toko Elektronik

class Product {
  constructor(name, guarantee) {
    this.name = name;
    this.guarantee = guarantee;
  }

  calculatePrice(quantity, basePrice) {
    return basePrice * quantity;
  }
}

class Laptop extends Product {
  constructor() {
    super("Laptop", "2 tahun");
    this.tax = 0.1;
  }

  calculatePrice(quantity, basePrice) {
    let totalPrice = super.calculatePrice(quantity, basePrice);
    return totalPrice + totalPrice * this.tax;
  }
}

class Smartphone extends Product {
  constructor() {
    super("Smartphone", "1 tahun");
    this.discount = 0;
  }

  calculatePrice(quantity, basePrice) {
    let totalPrice = super.calculatePrice(quantity, basePrice);
    if (quantity > 1) {
      this.discount = 0.05;
    }

    return totalPrice - totalPrice * this.discount;
  }
}

class Tablet extends Product {
  constructor() {
    super("Tablet", "6 bulan");
  }
}

const inventory = [new Laptop(), new Smartphone(), new Tablet()];

const displayInventoryPrice = (quantity, basePrice) => {
  inventory.map((item) => {
    console.log(
      `Name: ${item.name}, \nGaransi: ${
        item.guarantee
      }, \nJumlah: ${quantity}, \nTotal Harga Jual: ${item.calculatePrice(
        quantity,
        basePrice
      )}\n`
    );
  });
};

console.log("\n=======Soal 3=======\n");
console.log("\n=======Jumlah 1 - Harga 5.000.000=======\n");
displayInventoryPrice(1, 5000000);

console.log("\n=======Jumlah 2 - Harga 10.000.000=======\n");
displayInventoryPrice(2, 10000000);

console.log("\n=======Jumlah 3 - Harga 15.000.000=======\n");
displayInventoryPrice(3, 15000000);

// Sistem Penilaian Akademik Online

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

class Dosen extends User {
  constructor(name) {
    super(name, "Dosen");
    this.grades = {};
  }

  setGrade(mahasiswa, course, grade) {
    if (this.grades[mahasiswa.name]) {
      const exitingCourse = this.grades[mahasiswa.name].find(
        (item) => item.course === course
      );

      if (exitingCourse) {
        console.log("Mata kuliah sudah ada");
        return;
      }

      this.grades[mahasiswa.name].push({ course, grade });
    } else {
      this.grades[mahasiswa.name] = [{ course, grade }];
    }

    mahasiswa.setGrade(this.grades[mahasiswa.name]);
  }

  editGrade(mahasiswa, course, grade) {
    if (!this.grades[mahasiswa.name]) {
      return "Data mahasiswa tidak ditemukan";
    }

    this.grades[mahasiswa.name].find((item) => {
      if (item.course === course) {
        item.grade = grade;
      }
    });

    mahasiswa.setGrade(this.grades[mahasiswa.name]);
  }

  viewGrade(mahasiswa) {
    return this.grades[mahasiswa.name];
  }
}

class Mahasiswa extends User {
  constructor(name) {
    super(name, "Mahasiswa");
    this.grades = [];
  }

  setGrade(grades) {
    this.grades = grades;
  }

  editGrade() {
    return "Tidak bisa mengedit nilai, anda bukan dosen";
  }

  viewGrade() {
    if (this.grades.length === 0) {
      return "Data nilai belum diisi sama dosen";
    }
    return this.grades;
  }
}

console.log("\n=======Soal 4=======\n");

const dosen = new Dosen("Prof. Sophie");
const mahasiswa = new Mahasiswa("Alexsa");
// const mahasiswa2 = new Mahasiswa("Alex");

console.log(dosen.getRole());
console.log(mahasiswa.getRole());

console.log(mahasiswa.viewGrade());
dosen.setGrade(mahasiswa, "Pemrograman Web", 70);
console.log(mahasiswa.viewGrade());

dosen.setGrade(mahasiswa, "Pemrograman Web", 80);

dosen.editGrade(mahasiswa, "Pemrograman Web", 100);
console.log(mahasiswa.viewGrade());
