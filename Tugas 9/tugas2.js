class Barang {
  constructor(namaBarang, harga) {
    this.namaBarang = namaBarang;
    this.harga = harga;
  }

  getInfoBarang() {
    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(this.harga);

    return `${this.namaBarang}: ${currencyFormatter}`;
  }
}

class Keranjang {
  constructor(daftarBarang) {
    this.daftarBarang = daftarBarang;
  }

  tambahBarang(barang) {
    this.daftarBarang.push(barang);
  }

  totalHarga() {
    let totalHargaBarang = 0;
    for (const barang of this.daftarBarang) {
      totalHargaBarang += barang.harga;
    }

    return totalHargaBarang;
  }
}

class Membership {
  constructor(namaMember, tipeMembership) {
    this.namaMember = namaMember;
    this.tipeMembership = tipeMembership;
  }

  diskonMember() {
    if (this.tipeMembership === "gold") {
      return 0.2;
    } else if (this.tipeMembership === "silver") {
      return 0.1;
    } else if (this.tipeMembership === "bronze") {
      return 0.05;
    } else {
      return 0;
    }
  }

  infoMembership() {
    return `Member: ${this.namaMember} (${this.tipeMembership})`;
  }
}

class Transaksi {
  constructor(keranjang, member) {
    this.keranjang = keranjang;
    this.member = member;
  }

  hitungTotalAkhir() {
    const totalHarga = this.keranjang.totalHarga();
    const diskon = this.member.diskonMember();
    const totalSetelahDiskon = totalHarga - totalHarga * diskon;

    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalSetelahDiskon);

    return currencyFormatter;
  }

  infoTrankasi() {
    const daftarBarang = this.keranjang.daftarBarang.map((barang) =>
      barang.getInfoBarang()
    );

    return `\n${this.member.infoMembership()}\nDaftar Barang:\n${daftarBarang.join(
      "\n"
    )}\nTotal Akhir: ${this.hitungTotalAkhir()}\n`;
  }
}

const sepatu = new Barang("Sepatu", 500000);
const tas = new Barang("Tas", 300000);
const celana = new Barang("Celana", 200000);

const keranjang = new Keranjang([sepatu, tas]);
const member = new Membership("Budi", "gold");
const transaksi = new Transaksi(keranjang, member);

console.log(transaksi.infoTrankasi());
