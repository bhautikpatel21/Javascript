// || : OBJECT AND CLASS : ||

// let person = {
//     age: 25,
//     greet: function(){
//         return ("Hello Good Morning");
//     }
// };

// person.name = "Skill";
// person.nationaltiy = "Indian"

// console.log(person);
// console.log(person.age);
// console.log(person.greet());

// delete person.age;
// console.log(person);

// || : OBJECT ACCESS PROPERTY : ||

// console.log(person.age);
// console.log(person["age"]);

// let person = {
//     name: "prerak",
//     age: 20,
//     marks:{
//         maths: 33,
//         sci: 35,
//         eng: 47
//     },
//     hobbies: ["reading","dancing","phoyograpy"]
// };

// console.log(person);
// console.log(person.marks);
// console.log(person.marks.maths);
// console.log(person.hobbies[0])

// class person{
//     constructor(name,city){
//         this.name = name;
//         this.city = city;
//     }
//     greet(){
//         return ("Hello " + this.name + "\n lives in : "+ this.city);
//     }
// }
// let brahm = new person ("BRAHM","surat");
// console.log(brahm.greet());

// || : TEMPLATE LITERAL : ||

let a = 25, b = 50;

let data = `Hello good morning
${a*b} ${a+b}`;
console.log(data);