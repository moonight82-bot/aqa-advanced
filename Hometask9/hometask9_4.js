const person = {
  firstName: "Сашко",
  lastName: "Іваненко",
  age: 25
};

person.email = "sashko.ivanenko@gmail.com";

delete person.age;

console.log(person);