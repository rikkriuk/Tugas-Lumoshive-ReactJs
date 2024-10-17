const data = {
  data: {
    username: "John Doe",
    age: 30,
    hobbies: ["membaca", "melukis", "bermain"],
    address: [
      {
        address: "123 Main St",
      },
      {
        address: "456 Elm St",
      },
    ],
  },
};

/*
   buatlah sebuah string seperti ini:
   "Hello, my name is John Doe, Hobby saya adalah membaca, melukis, dan bermain. Alamat saya di 456 Elm St"
 */

const { username, age, hobbies, address } = data.data;
const [membaca, melukis, bermain] = hobbies;

const text = `Hello, my name is ${username}, Hobby saya adalah ${membaca}, ${melukis}, dan ${bermain}. Alamat saya di ${address[1].address}`;

console.log(text);
