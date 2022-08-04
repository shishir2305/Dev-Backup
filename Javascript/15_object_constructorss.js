// object constructors have a name starting with capital letter used to initialize certain common properties to all the objects

function Obj(name, role) {
  this.name = name;
  this.role = role;
}
var person = new Obj("Shishir Jha", "Full Stack Developer");
console.log(person);
person["nationality"] = "Indian";
console.log(person);
