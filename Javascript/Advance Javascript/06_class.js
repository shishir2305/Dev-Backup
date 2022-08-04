// understanding classes

class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }
  printDetails() {
    console.log(
      `My name is - ${this.name} of age ${this.age} with roll no. ${this.roll}`
    );
  }
}

var shishir = new Student("Shishir Jha", 21, 27500120012);
shishir.printDetails();
console.log(shishir);
console.log(typeof shishir);
