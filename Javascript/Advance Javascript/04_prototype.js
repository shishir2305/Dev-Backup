// prototype is just a way to add something to an object constructor, we cannot directly add a new property to an object constructor function

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var dad = new Person("Parameshwar Jha", "Male");
console.log(dad);
// Person.prototype.caste = "Brahman";
Person.prototype.details = function () {
  return this.name + " " + this.gender;
};
var mom = new Person("Kusum Jha", "Female");
console.log(mom.details());
