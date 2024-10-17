// isPalindrome

// Buat sebuah fungsi bernama isPalindrome yang menerima satu parameter string dan mengembalikan true jika string tersebut adalah palindrom (dibaca sama dari depan dan belakang), dan false jika tidak. Fungsi ini harus mengabaikan huruf besar/kecil dan karakter selain huruf (misalnya tanda baca).

const isPlaindrome = (string) => {
   string = string.toLowerCase();
   const stringReverse = string.split("").reverse().join("");
   return string === stringReverse;
 };
 
 console.log(isPlaindrome("katak"));
 console.log(isPlaindrome("ana"));
 console.log(isPlaindrome("Saya"));
 
 // isAnagram
 
 // Buat sebuah fungsi bernama apakahAnagram yang menerima dua parameter, yaitu dua buah string. Fungsi ini harus mengembalikan nilai true jika kedua string tersebut adalah anagram (memiliki jumlah dan jenis huruf yang sama meskipun urutannya berbeda), dan mengembalikan false jika tidak. Fungsi harus mengabaikan perbedaan huruf kapital dan spasi.
 
 // Contoh:
 
 // apakahAnagram("listen", "silent") → true
 // apakahAnagram("hello", "world") → false
 
 const sortingString = (string) =>
   string.toLowerCase().split("").sort().join("");
 
 const isAnagram = (string1, string2) => {
   return sortingString(string1) === sortingString(string2);
 };
 
 console.log(isAnagram("listen", "silent"));
 console.log(isAnagram("hello", "world"));
 