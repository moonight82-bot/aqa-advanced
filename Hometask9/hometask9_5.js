const users = [
  { name: "Іван", email: "ivan@gmail.com", age: 25 },
  { name: "Марія", email: "maria@gmail.com", age: 30 },
  { name: "Олег", email: "oleg@gmail.com", age: 22 }
];

for (const user of users) {
  const { name, email, age } = user;

  console.log(name);
  console.log(email);
  console.log(age);
}
