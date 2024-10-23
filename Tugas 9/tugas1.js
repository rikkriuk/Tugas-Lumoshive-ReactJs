class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `Kendaraan: ${this.merek}, Tahun: ${this.tahun}`;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun, kapastias, mesin) {
    super(merek, model, tahun);
    this.kapastias = kapastias;
    this.mesin = mesin;
  }

  infoMobil() {
    return `${super.infoKendaraan()}, Kapasitas: ${
      this.kapastias
    }, mesin: ${this.mesin.infoMesin()}`;
  }
}

class Motor extends Kendaraan {
  constructor(merek, model, tahun, jenisMotor, mesin) {
    super(merek, model, tahun);
    this.jenisMotor = jenisMotor;
    this.mesin = mesin;
  }

  infoMotor() {
    return `${super.infoKendaraan()}, Kapasitas: ${
      this.jenisMotor
    }, mesin: ${this.mesin.infoMesin()}`;
  }
}

class Mesin {
  constructor(jenis, tenagaKuda) {
    this.jenis = jenis;
    this.tenagaKuda = tenagaKuda;
  }

  infoMesin() {
    return `Jenis Mesin: ${this.jenis}, Tenaga: ${this.tenagaKuda} HP`;
  }
}

class Membership {
  constructor(namaMember, tipeMember) {
    this.namaMember = namaMember;
    this.tipeMember = tipeMember;
  }

  diskonMember() {
    if (this.tipeMember === "gold") {
      return 0.15;
    } else if (this.tipeMember === "silver") {
      return 0.1;
    } else if (this.tipeMember === "bronze") {
      return 0.05;
    } else {
      return 0;
    }
  }

  infoMembership() {
    return `Member: ${this.namaMember} (${this.tipeMember})`;
  }
}

class Rental {
  constructor(kendaraan, member, tanggalRental, lamaHari) {
    this.kendaraan = kendaraan;
    this.member = member;
    this.tanggalRental = new Date(tanggalRental);
    this.lamaHari = lamaHari;
  }

  hitungTotal() {
    let tarifHarian = 0;
    if (this.kendaraan instanceof Mobil) {
      tarifHarian = 100000;
    } else if (this.kendaraan instanceof Motor) {
      tarifHarian = 50000;
    }

    const totalRental = tarifHarian * this.lamaHari;
    const diskon = totalRental * this.member.diskonMember();

    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return currencyFormatter.format(totalRental - diskon);
  }

  infoRental() {
    const formattedTanggalRental = new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(this.tanggalRental);

    return `
    ${this.kendaraan.infoKendaraan()}\n
    ${this.kendaraan.mesin.infoMesin()}\n
    ${this.member.infoMembership()}\n
    Tanggal Rental: ${formattedTanggalRental}\n
    Lama Rental: ${this.lamaHari} hari\n
    Total Rental: ${this.hitungTotal()}`;
  }
}

const mesin = new Mesin("Bensin", 120);
const mobil = new Mobil("Toyota Avanza", "Avanza", 2022, 7, mesin);

const membership = new Membership("Siti", "silver");
const rental = new Rental(mobil, membership, "2023-09-24", 3);

console.log(rental.infoRental());
