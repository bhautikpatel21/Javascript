//   || : MATH METHODS : || 

// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.3));
// console.log(Math.trunc(4.3));
// console.log(Math.sign(7));
// console.log(Math.random());
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(144));
// console.log(Math.min(11,23,45,16,32));
// console.log(Math.max(45,21,30,69,78,51));

// 4 5 4 4 1 8 12 11 78

//  || : MAP METHODS : ||

// console.log("Map methods");

// let data = new Map ([["apple",100],["banana",200],["kiwi",300]]);

// data.set("orange",400);
// data.set("mango",500);
// console.log(data);

//  || : SET METHODS : || 

// let arr = new Set (["bmw","alto","thar","Fortuner"]);

// arr.add("jaguar");
// let txt = "";
// arr.forEach((str) => {
//     txt= txt + str + "\n";
// });

// console.log(txt);
//console.log(arr.entries());

//  || : NUMBER METHODS : || 

// let x = 123;

// console.log((123).toString());
// console.log((100+23).toString());

// let x = 123;

// console.log(x.toString());
// console.log((123).toString());
// console.log((100+23).toString())


// let x = 7.152;

// // console.log(x.toExponential());
// // console.log(x.toExponential(2));

// console.log(x.toExponential(10));


// let x = 6.654;

// console.log(x.toFixed());
// console.log(x.toFixed(2));
// console.log(x.toFixed(10));

// let data = 3.465;

// console.log(data.toPrecision());
// console.log(data.toPrecision(3));
// console.log(data.toPrecision(6));

// let x = 12.32;

// console.log(x.valueOf());
// console.log((123).valueOf());
// console.log((100+23).valueOf());

// let x = 213;

// console.log(x.toString());
// console.log((123).toString());
// console.log((123+32).toString());

// let x = 5.214;

// console.log(x.toExponential());
// console.log(x.toExponential(2))

// let x = 5.33;

// console.log(x.toPrecision(4));
// console.log(x.toPrecision(1));

// let x = 3.256;

// console.log(x.toFixed());
// console.log(x.toFixed(2));

// let data = 4.036;

// console.log(data.valueOf());
// console.log((342).valueOf());

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(1));

// || : FOR IN , FOR OF : ||

// let person ={
//     name: "skill",
//     age: 25,
//     email: "skill@test.in"
// };

// || : FUNCTION METHODS : || 

// hello()

// function hello()
// {
//     console.log("Hello world");
// }

// function hello (a,b)
// {
//     console.log(a*b);
// }
// hello (4,5)

// ||: FUNCTION HOISTING :||

// hello(5)
// function hello(y){
//     return y+y;
// }



// || ARRAY METHODS ||

// let  data = [10,32,49,65,72];
// data.push("Bhautik");
// console.log(data);

let data = [10,45,89,63,2,48];
data.pop();
console.log(data);

let arr = [1,23,45,89,623,47,21];
arr.shift();
console.log(data);

let un = [45,4,78,65,32,20];
un.unshift("bhautik");
console.log(un);

let len = [42,56,98,132,5,6];
console.log(len.length);

let sli= [12,54,86,32,10,56,31];
let all=sli.slice(2,6);
console.log(all);

let sp = [10,54,36,25,94,5]