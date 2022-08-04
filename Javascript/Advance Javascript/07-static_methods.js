// static methods are used on the actial classes and not on the objects created

class student {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  static print() {
    console.log("Full Stack Developer");
    console.log("Machine Learning Engineer");
  }
}
var shishir = new student("Shishir Jha", "Full Stack Developer");
console.log(shishir);
// shishir.print(); is not valid as static methods are always valid on the original class and not its object

student.print();
