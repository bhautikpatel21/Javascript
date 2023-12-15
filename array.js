
//    ||  PUSH METHOD ||

// let  arr = ["world","jacascript","mango"];
// arr.push("skill");
// console.log(arr);

// let arr = [11,22,33,44,55];
// arr.push(66);
// console.log(arr);

// let arr = [15,"skill",86,45];
// arr.push("kiwi",55);
// console.log(arr);

//    ||  ARRAY LENGHT ||

// let arr = [25,"ram","javascript",90];
// let data = arr.length;
// console.log(data);

//    ||  ARRAY POP  ||

// let data = ["banana",32,63,"kiwi",85];
// data.pop();
// console.log(data);

//    ||  ARRAY SHIFT  ||

// let arr = ["apple","kiwi",75,34,"banana"];
// arr.shift();
// console.log(arr);

//   || ARRAT UNSHIFT  ||

// let data = [45,"lemon","orange",85,10];
// data.unshift("bhautik");
// console.log(data);

//    || ARRAY CHANGING ELEMENTS ||

// let arr = ["kiwi","banana",85,"apple",36,24];
// arr[2]="ram";
// console.log(arr);

//    || ARRAY MERGING (CONCATENATING) ||

// let fruits = ["banana","apple","kiwi","mango"];
// let cars = ["bmw","alto","rr","fortuner",56];
// let all = fruits.concat(cars);
// console.log(all);

// let fruits = ["banana","apple","kiwi","mango"];
// let cars = ["bmw","alto","rr","fortuner",56];
// let citys = ["surat","bangrole",758,"mumbai"];
// let all = fruits.concat(cars,citys);
// console.log(all);

// let fruits = ["banana","apple","kiwi","mango"];
// let all = fruits.concat("bhautik");
// console.log(all);

//    ||  ARRAY SPLICE  ||

// let arr = ["world","skill","apple","ram","surat","amreli"];
// arr.splice(2,2);
// console.log(arr);

// let arr = ["world","skill","apple",85,"surat","amreli"];
// arr.splice(2,2,"bhautik","qode");
// console.log(arr);

// let arr = ["world","skill",52,"ram","surat","amreli"];
// arr.splice(2,1,"bhautik","qode");
// console.log(arr);

//    ||  ARRAY  SLICE  ||

// let arr = ["world","skill","apple","ram","surat",98];
// let data = arr.slice(1);
// console.log(data);

// let arr = ["world","skill","apple","ram","surat",98];
// let data = arr.slice(1,3);
// console.log(data);

//    ||  ARRAY SORT  ||

// let data = ["bhautik",75,"apple","kiwi",62,32];
// data.sort();
// console.log(data);

//    || NUMERIC SORT ||

// let arr = [40,30,450,69,8,43];
// // arr.sort((a,b)=>a-b);
// console.log(arr.sort((a,b)=>a-b));

//    || ARRAY REVERSE ||

// let data = ["apple","javascript",51,"mango",21];
// data.sort();
// data.reverse();
// console.log(data);

//   || ARRAY MAX || 

// let data = [10,20,30,40,50,60,70];

// Num = (a) => {
//     return Math.max.apply(null,a);
// };
// console.log(Num(data));

//   || ARRAY MIN ||

// let data = [20,65,10,34,9,78,40];

// Num = (a) => {
//     return Math.min.apply(null,a);
// };
// console.log(Num(data));

//   || ARRAY FOREACH || 

// let data = [10,54,23,61,42];

// let a="" ;
// data.forEach((val,index) => {
//     a = a +" "+ val*2;
// })
// console.log(a);

//   ||  ARRAY MAP  ||

// let data = [10,54,23,61,42]

// let a = [];

// a = data.map((val,index)=>{
//     return val-5;
// })
// console.log(a);

//   ||  ARRAY FILTER  ||

// let data = [10,20,30,40,60];

// let a = [];

// a=data.filter((val,index)=>{
//     return val < 35
// })
// console.log(a);

//   ||  ARRAY REDUCE  ||

// let data = [21,30,45,16,85,20];

// let abc;

// abc = data.reduce((a,val,index)=>{
//     return a + val;
// })
// console.log(abc);

//   ||  ARRAY REDUCERIGHT  ||

// let data = [10,0,21,42,85,73];

// let abc;

// abc = data.reduceRight((a,val,index)=>{
//     return a + val;
// })
// console.log(abc);

//   ||  ARRAY EVERY  ||

// let data = [33,44,55,66,77,88,99]

// let abc ;

// abc = data.every((val,index,array)=>{
//     return val > 22;
// })
// console.log(abc);

//   ||  ARRAY SOME ||

// let data = [10,20,30,40,50,60,70];

// let abc;

// abc = data.some((val,index)=>{
//     return val >=25;
// })
// console.log(abc);

//   || ARRAY FIND ||

// let arr = [4,13,62,10,86,64];
// let abc;

// abc= arr.find((val,index)=>{
//     return val >=20;
// })
// console.log(abc);

//    ||  ARRAY FINDINDEX  ||

// let arr = [10,31,20,53,62,41];
// let data;

// data = arr.findIndex((val,index)=>{
//     return val >=20;
// })
// console.log(data);

//    ||  ARRAY ENTRIES  ||

// let arr = [50,40,30,20,10,5];
// let data;

// data = arr.entries();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);

//    ||  ARRAY INCLUDES  ||

// let arr = [10,15,25,20,30,60];
// let data;

// data = arr.includes(30);
// console.log(data);

//    ||  ARRAY COPYWITHIN  ||

let data = [11,22,33,44,55,66,77,88,99];
console.log(data.copyWithin(0,4,7));
console.log(data.copyWithin(1,5));