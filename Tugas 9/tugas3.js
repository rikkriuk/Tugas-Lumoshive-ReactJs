class Dompet {
  constructor(saldo) {
    this.saldo = saldo;
  }

  topUp(nominal) {
    this.saldo += nominal;
    console.log(`Top-up Rp ${nominal} berhasil!`);
  }

  bayar(nominal) {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      return `Pembayaran Rp ${nominal} berhasil!`;
    } else {
      return "Saldo tidak mencukupi";
    }
  }

  cekSaldo() {
    const formattedSaldo = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(this.saldo);

    return `Saldo saat ini: ${formattedSaldo}`;
  }
}

class Transaksi {
  constructor(dompet, nominal, jenisTransaksi) {
    this.dompet = dompet;
    this.nominal = nominal;
    this.jenisTransaksi = jenisTransaksi;
    this.tanggalTransaksi = new Date();
  }

  infoTransaksi() {
    const timeFormatted = this.tanggalTransaksi.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    this.tanggalTransaksi = new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(this.tanggalTransaksi);

    this.nominal = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(this.nominal);

    return `${this.jenisTransaksi} ${this.nominal} pada ${this.tanggalTransaksi} pukul ${timeFormatted}`;
  }
}

class DompetPremium extends Dompet {
  constructor(saldo, bonus) {
    super(saldo);
    this.bonus = bonus;
  }

  topUp(nominal) {
    super.topUp(nominal);
    this.bonus = nominal * 0.05;
    this.saldo += this.bonus;
    return `Bonus Rp ${this.bonus} berhasil diterima!`;
  }
}

const dompet = new DompetPremium(500000);
console.log(dompet.cekSaldo());
console.log(dompet.topUp(100000));
console.log(dompet.cekSaldo());
console.log(dompet.bayar(200000));
console.log(dompet.cekSaldo());

const transaksiTopUp = new Transaksi(dompet, 200000, "Pembayaran");
console.log(transaksiTopUp.infoTransaksi());
