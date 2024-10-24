// Single Responsibility Principle (SRP)
// Setiap kelas harus memiliki satu tanggung jawab atau alasan untuk berubah. Ini berarti kelas hanya menangani satu tugas tertentu untuk menjaga agar kode lebih modular dan mudah dipelihara.

class Writing {
  write() {
    console.log("Writing...");
  }
}

class Drawing {
  draw() {
    console.log("Drawing...");
  }
}

// Open/Closed Principle (OCP)
// Kelas harus dibuka untuk ekstensi tetapi ditutup untuk modifikasi. Ini berarti kelas dapat diperluas tanpa mengubah kode yang ada.

class Handphone {
  sendMessage() {
    console.log("Sending message");
  }

  call() {
    console.log("Calling...");
  }
}

class SmartPhone extends Handphone {
  playGame() {
    console.log("Playing game");
  }
}

// Liskov Substitution Principle (LSP)
// Subkelas harus dapat diganti dengan kelas induknya tanpa mengubah perilaku program. Ini berarti bahwa kelas turunan harus dapat digunakan di tempat yang sama dengan kelas induknya.

class Hewan {
  bergerak() {
    console.log("Hewan ini bergerak.");
  }
}

class Burung extends Hewan {
  bergerak() {
    console.log("Burung ini terbang.");
  }
}

// Interface Segregation Principle (ISP)
// Klien tidak boleh dipaksa untuk bergantung pada antarmuka yang tidak mereka gunakan. Ini berarti bahwa antarmuka harus dibagi menjadi bagian-bagian kecil yang lebih spesifik, sehingga klien hanya menggunakan metode yang mereka butuhkan.

class Calling {
  call() {
    console.log("Calling...");
  }
}

class Messaging {
  sendMessage() {
    console.log("Sending message");
  }
}

class Gaming {
  playGame() {
    console.log("Playing game");
  }
}

// Dependency Inversion Principle (DIP)
// Kode harus bergantung pada abstraksi, bukan pada implementasi konkret. Ini berarti bahwa kelas harus bergantung pada antarmuka atau abstraksi daripada detail implementasi untuk meningkatkan fleksibilitas.

class Computer {
  constructor(batterySourse) {
    this.batterySourse = batterySourse;
  }

  charge() {
    this.batterySourse.charge();
    console.log("Charging...");
  }
}

class Charger {
  charge() {
    console.log("Charging using manual charger");
  }
}

class PowerBank {
  charge() {
    console.log("Charging using power bank");
  }
}

const charger = new Charger();
const powerBank = new PowerBank();
const laptop = new Computer(powerBank);
laptop.charge();
