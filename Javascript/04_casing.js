// toUpperCase() and toLowerCase() methods are used to convert a string to uppercase or lowercase.

var name = "Shishir Jha";
var name1 = name.toUpperCase();
console.log(name1);
var name2 = name.toLowerCase();
console.log(name2);
var initials =
  name.charAt(0).toUpperCase() +
  name.charAt(name.indexOf(" ") + 1).toUpperCase();
console.log(initials);
var name4 = name[0].toLowerCase();
console.log(name4);

// charAt() method - returns the character at the specified index.
// indexOf() method - returns the index of the first occurrence of a substring.
