// Class dan Objek dengan Constructor

// Soal:

// Buatlah class bernama Mahasiswa dengan properti:

// nama (string)
// nim (string)
// jurusan (string)
// Method perkenalkan() yang menampilkan pesan:
// "Halo, nama saya [nama] dengan NIM [nim] dari jurusan [jurusan]."
// Buatlah instance dari class Mahasiswa dengan data berikut:

// Nama: Budi
// NIM: 12345
// Jurusan: Teknik Informatika
// Jalankan method perkenalkan() dari instance tersebut dan tampilkan output.

class Mahasiswa {
  constructor(name, nim, jurusan) {
    this.name = name;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  perkenalan() {
    console.log(
      `Halo, nama saya ${this.name} dengan NIM ${this.nim} dari jurusan ${this.jurusan}.`
    );
  }
}

const mahasiswa = new Mahasiswa("Budi", "12345", "Teknik Informatika");
mahasiswa.perkenalan();

// Getter dan Setter pada Class

// Soal:

// Buatlah class Produk dengan properti:

// nama (string)
// harga (number)
// Gunakan getter untuk mendapatkan informasi produk dalam format:
// "Produk: [nama] - Harga: Rp[harga]"
// Gunakan setter untuk mengubah nama produk.
// Buat objek dari class Produk dengan nama "Laptop" dan harga 10000000.

// Gunakan setter untuk mengubah nama menjadi "Laptop Gaming" dan tampilkan hasil menggunakan getter.

class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  get informasi() {
    return `Produk: ${this.nama} - Harga: Rp${this.harga}`;
  }

  set ubahNamaProduk(namaBaru) {
    this.nama = namaBaru;
  }
}

const produk1 = new Produk("Laptop", 10000000);
console.log(produk1.informasi);

produk1.ubahNamaProduk = "Laptop Gaming";
console.log(produk1.informasi);
