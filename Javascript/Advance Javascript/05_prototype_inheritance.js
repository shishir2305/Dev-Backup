// prototypal inheritance is a process in which we use the already defined object's properties and use to along with some properties of the new object and we can also add some new orioerties to it

function Employee(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}

function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary); // this is always required here
  this.language = language;
}

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer; // define the constructor

var employee = new Programmer("Shishir Jha", 12, 250000000, "Javascript");
console.log(employee);
