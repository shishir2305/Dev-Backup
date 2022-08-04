class student1 {
  constructor(name, dept) {
    this.name = name;
    this.dept = dept;
  }
  static add(a, b) {
    return a + b;
  }
  print() {
    console.log(this.name);
    console.log(this.dept);
  }
}

var stud1 = new student1("Nisha Jha", "Computer Science and Engineering");
console.log(stud1);

class student2 extends student1 {
  constructor(name, dept, language, role) {
    super(name, dept); // the super keyword is used to call the parent classes constructor
    this.language = language;
    this.role = role;
  }
}

var stud2 = new student2(
  "Shishir Jha",
  "Computer Science and Engineering",
  "Javascript",
  "Full Stack Developer"
);
console.log(stud2);

console.log(student2.add(23, 7)); // we can also access static methods using inheritance
