// for in loop and for of loop

// let person ={
//     name: "skill",
//     age: 25,
//     email: "skill@test.in"
// };

// let person = [11,22,33,44,55];

// let txt = "";
// for (let i in person){
//     txt+=person[i]+"\n";
// }
// console.log(txt);

// let person = [11,22,33,44,55];

// let txt = "";

// for (let i of person){
//     txt += i + "\t";
// }
// console.log(txt);

// ... rest parameter / spread operator

// let person ={
//     name: "skill",
//     age = 25,
//     email : "skill@test.in",
// };

// let data = person ;

let data = {...person};

person.salary = 1500;

data.hobbies = ["music","dansing"];
console.log(person);
console.log(data);