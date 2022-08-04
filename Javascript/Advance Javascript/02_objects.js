// object constructor function

function Student(name, department, role, interest) {
  this.name = name;
  this.department = department;
  this.role = role;
  this.interest = interest;
}

var student1 = new Student("Shishir Jha", "cse", "developer", "ml engineer");
var student2 = new Student("Nisha Jha", "cse", "designer", "ml engineer");
console.log(student2);
