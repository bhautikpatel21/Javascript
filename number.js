//  |||  toString() - returns a number as a string   |||

// let x = 123;
// console.log(x.toString());  // 123
// console.log((123).toString());  //123
// console.log((100+23).toString()); //123

//  ||| toExponential() - returns a number written in exponential notation |||

// let x = 9.656;
// console.log(x.toExponential());   // 9.656e+0
// console.log(x.toExponential(2));   // 9.66e+0
// console.log(x.toExponential(4));   // 9.6560e+0
// console.log(x.toExponential(6));   // 9.656000e+0

//  ||| toFixed() - returns a number written with a number of decimals |||

// let x = 9.656;
// console.log(x.toFixed());   //  10
// console.log(x.toFixed(2));   // 9.66
// console.log(x.toFixed(4));   // 9.6560
// console.log(x.toFixed(6));   // 9.656000

//  ||| toPrecision() - return a number written with a speciufied length |||

// let x = 9.656;

// console.log (x.toPrecision());   // 9.656
// console.log (x.toPrecision(2));  // 9.7
// console.log (x.toPrecision(4));  // 9.656
// console.log (x.toPrecision(6));  // 9.65600

// ||| valueof() - returns a number as a  number |||

// let x = 123;
// console.log(x.valueOf());   // 123
// console.log((123).valueOf());  // 123
// console.log((100+23).valueOf());   //  123

//  ||| Number() - Rerturns a number converted from argument |||

// console.log(Number(true));   // 1
// console.log(Number(false));   // 0
// console.log(Number("10"));   // 10
// console.log(Number(" 10"));   // 10
// console.log(Number("10 "));   // 10
// console.log(Number(" 10 "));   // 10
// console.log(Number("10.33"));   // 10.33
// console.log(Number("10,33"));   //  NaN
// console.log(Number("10 33"));   //  NaN
// console.log(Number("John"));   // NaN

//  ||| parseFloat() - parse its argument and returns a floating point number |||

// console.log(parseFloat("10"));    // 10
// console.log(parseFloat("10.33"));    // 10.33
// console.log(parseFloat("10 20 30 "));    // 10
// console.log(parseFloat("10 years"));    // 10
// console.log(parseFloat("years 10"));    // NaN

// ||| parseInt() - parse its argument and returns a whole number |||

// console.log(parseInt("-10"));   //  -10
// console.log(parseInt("-10.33"));   //  -10
// console.log(parseInt("10"));   //  10
// console.log(parseInt("10.33"));   //  10
// console.log(parseInt("10 20 30"));   //  10
// console.log(parseInt("10 years"));   //  10
// console.log(parseInt("years 10"));   //  NaN

// ||| Number.isInteger() - returns true if the argument is an integer ||| 

// console.log(Number.isInteger(10));  // true
// console.log(Number.isInteger(10.5));  // false

// ||| Number.isSafeInteger() - returns true if the argument is a safe integer ||| 

// console.log(Number.isSafeInteger(10));  // true
// console.log(Number.isSafeInteger(12345678901234567890));  // false

// ||| Number.parseFloat() - convert a string to a number |||

// console.log(Number.parseFloat("10"));    // 10
// console.log(Number.parseFloat("10.33"));    // 10.33
// console.log(Number.parseFloat("10 20 30"));    // 10
// console.log(Number.parseFloat("10 years"));    // 10
// console.log(Number.parseFloat("years 10"));    // NaN

// ||| Number.parseInt() - convert a string to a whole number |||

// console.log(Number.parseInt("-10"));    // -10
// console.log(Number.parseInt("-10.33"));    // -10
// console.log(Number.parseInt("10"));    // 10
// console.log(Number.parseInt("10.33"));    // 10
// console.log(Number.parseInt("10 6"));    // 10
// console.log(Number.parseInt("10 years"));    // 10
// console.log(Number.parseInt("years 10"));    // NaN