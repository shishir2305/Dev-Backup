var first = 0;
var second = 1;
var third;
var n = 10;
console.log(first);
console.log(second);
for (let i = 1; i <= n; i++) {
  third = first + second;
  console.log(third);
  first = second;
  second = third;
}
