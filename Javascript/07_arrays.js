// arrays are a collection of items in a particular order and can be of any type (string, number, object, etc.)

var arr = ["a", "b", "c", "d", "e", "c"];
var find = arr.includes("d");
console.log(find);
var find2 = arr.includes("c", 3);
console.log(find2);

// arr.includes() is a method that checks if an array contains a certain value or not. It returns a boolean value. The second argument is the index at which the search should start and the first argument is the element to be searched for.
