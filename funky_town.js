// Excited Cookies: Samantha Ngo and Eugene Thomas
// SoftDev1 pd7
// HW15 -- Sequential Progression
// 2017-12-06

/*
OBJECTIVE ONE: A method that returns the nth fibonacci number.

fibonacci(0) --> 0
fibonacci(1) --> 1
fibonacci(2) --> 1
fibonacci(3) --> 2

In general, fibonacci(n) = fibonacci(n-1) + fibonacci(n-2). We used that to code the method.
*/

var fibonacci = function(n) {
 // for fibonacci(0)...
 if (n == 0) {
   return 0;
 }
// for fibonacci(1) and fibonacci(2)...
 else if (n <= 2){
   return 1;
 }
// for fibonacci(n)...
 else {
   return fibonacci(n - 1) + fibonacci(n - 2);
 }
}

/*
OBJECTIVE TWO: A method that returns the greatest common denominator of two integers.

*/
var gcd = function (a,b) {
  var x;
  // To account for negative numbers...
  a = Math.abs(a);
  b = Math.abs(b);
  if (a > b) {x = b;}
  else {x = a;}
  while (x > 0) {
    // If both a and b are divisible by x...
    if (a%x == 0 && b%x == 0) {
      break;
    }
    else {
      x -= 1;
    }
  }
  return x;
}

// Feel free to add more names!!!
var students = ["Samantha", "Eugene", "Yuyang", "Carol", "Tiffany", "Jen", "Leo", "And More"]
var randomStudent = function() {
    // Picks a random number between 0 and the length of the list minus one...
    var s = Math.random() * (students.length-1);
    // Rounds this number nearest integer since JavaScript does not possess an int() method...
    s = s.toFixed(0);
    return students[s];
}

// The prints!!!
console.log(fibonacci(3)) // 3
console.log(fibonacci(7)) // 13
console.log(fibonacci(14)) // 377
console.log(gcd(3, 7)) // 1
console.log(gcd(120, 180)) // 60
console.log(gcd(36592, 71042)) // 2
// The following console prints are subject to change because they are random: 
console.log(randomStudent())
console.log(randomStudent())
console.log(randomStudent())

var buttonCallBack = function(e){
    console.log("This is ...");
    console.log(e);
    console.log("This is THIS Object...");
    console.log(this);
}

var b = document.getElementById("b");
console.log("DOCUMENT: ", document);
console.log("Get Element by ID: ", b);
b.addEventListener('click', buttonCallBack);
