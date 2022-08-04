// new Object method

var student1 = new Object(); // creates an empty object
student1.name = "Shishir Jha";
student1["role"] = "Full Stack Developer";
student1.getInfo = function () {
  var info = this.name + " " + this.role;
  return info;
};

var details = student1.getInfo();
console.log(details);
