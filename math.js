
//     || MATH PROPERTIES ||

// Math.E   // return Euler's number
// Math.PI    // return PI
// Math.SQRT2   // return the square root of 2
// Math.SQRT1_2   // return the square root of 1/2
// Math.LN2   // return the natural logarithe of 2 
// Math.LN10   // return the natural logarithe of 10
// Math.LOG2E   // return base 2 logarithm of E 
// Math.LOG10E   // return base 10 logarithm of E  

//     || MATH METHODS ||

console.log(Math.round(4,6));     // 5  returns the nearest integer
console.log(Math.round(4,3));     // 4

console.log(Math.ceil(4.6));     // 5  returns the value of x rounded up to tis nearest integer
console.log(Math.ceil(4.2));     // 5
console.log(Math.ceil(-4.3));     // -4

console.log(Math.floor(4.6));     // 4  returns the value of x rounded down to tis nearest integer
console.log(Math.floor(4.2));     // 4
console.log(Math.floor(-4.3));     // -5

console.log(Math.trunc(4.6));      // 4  returns the integer part of x
console.log(Math.trunc(4.2));      // 4

console.log(Math.sign(-4));      // -1  returns if x is negative , null or positive
console.log(Math.sign(0));      // 0
console.log(Math.sign(4));      // 1

console.log(Math.pow(2,3));     // 8  returns the value of x to the power of y
console.log(Math.pow(8,2));     // 64

console.log(Math.sqrt(16));     // 4  returns the square root of x
console.log(Math.sqrt(121));     // 11

console.log(Math.abs(-6));     // 6  returns the absolute(positive) value of x
console.log(Math.abs(1.2));    // 1.2

console.log(Math.random());     // 0.45465544448465

console.log(Math.min(0,150,30,20,-8,-200));    // -200  can be used to find the lowest or highest value in a list of arguments
console.log(Math.max(0,150,30,20,-8,-200));    // 150

console.log(Math.sin(90 * Math.PI / 180));     // 1 (the sine of 90 degrees)  return the sine of  the angle x.
console.log(Math.sin(30 * Math.PI / 180));     // 0.5 (the sine of 30 degrees)

console.log(Math.cos(0 * Math.PI / 180));     // 1 (the cos of 0 degrees)   retuen the cosine of the angle x
console.log(Math.cos(60 * Math.PI / 180));     // 0.5 (the cos of 60 degrees)

console.log(Math.log(1));     // 0          returns the natural logarithm of x 
console.log(Math.log(2));     // 0.6931471805599453
console.log(Math.log(10));     // 0.302585092994046

console.log(Math.log2(8));     // 3      returns the base 2 logarithm of x 

console.log(Math.log10(1000));   // 3    return the base 10 logarithm of x