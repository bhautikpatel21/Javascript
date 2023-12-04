// let x = Number(prompt("Enter x: "));
// let y = Number(prompt("Enter y: "));

// if(x<2000 || x>3000)
// {
//    console.log("Value of x is: "+x);
// }

// if(100<y && y<500)
// {
//    console.log("Value of y is: "+y);
// }

//#####1. Enter two value find smallest.#####=>

// let x = Number(prompt("Enter x: "));
// let y = Number(prompt("Enter y: "));

// if(x<y)
// {
//     console.log("x is lowest");
// }else
// {
//     console.log("y is lowest");
// }

//#####2. Enter one value find its positive or negative.#####=>

// let x = Number(prompt("Enter the x value :-"));
// if ((x >= 0)) {
//     console.log("Value of x is :-", +x);
//     console.log("x is positive");
// } else {
//     console.log("Value of x is :-", +x);
//     console.log("x is negative");
// }

//#####3. Enter one value find its divisible by 5 or not.#####=>

// let x = Number(prompt("Enter the x value :-"));
// if (x % 5 === 0) {
//     console.log("x is divisible by 5");
//   } else {
//     console.log("x is not divisible by 5");
//   }

//#####4. Enter one value find its divisible by 5 and 3 or not.#####=>

// let x = Number(prompt("Enter the x value :-"));
//   if (x % 5 === 0 && x % 3 === 0) {
//     console.log("x is divisible by both 5 and 3");
//   } else {
//     console.log("x is not divisible by both 5 and 3");
//   }

//#####5. Enter Students marks whether pass or not.#####=>

// let x = Number(prompt("Enter the gujarati mark :-"));
// console.log("gujarati mark :-",+x);

// let y = Number(prompt("Enter the english mark :-"));
// console.log("english mark :-",+y);

// let z = Number(prompt("Enter the science mark :-"));
// console.log("science mark :-",+z);

// let marks = x+y+z;
// let per = marks / 3;

// if(per >33)

//     {
//         console.log("pass");
//     }else 
//     {
//         console.log("Fail");
//     }

//#####6. Enter year find its leap year or not.#####=>
// let x = Number(prompt("Enter the x value :-"));
// console.log("year",+x);

// if (x % 4 === 0) {
//     if (x % 100 === 0) {
//         if (x % 400 === 0) {
//             console.log(" is a leap year");
//         } else {
//             console.log(" is not a leap year ");
//         }
//     } else {
//         console.log(" is a leap year ");
//     }
// } else {
//     console.log(" is not a leap year ");
// }

//#####7. Enter a, b, c find largest among them.#####=>    

// let a = Number(prompt("Enter the a value :-"));
// let b = Number(prompt("Enter the b value :-"));
// let c = Number(prompt("Enter the c value :-"));

// if(a>b)
// {
//     if(a>c)
//     console.log("a is gretest");
// }else if(b>c)
//     {
//     console.log("b is gretest");    
//     }else{
//         console.log("c is gretest");
// }

//#####8. electricity unit and total amount #####=>

// const unit = prompt("Enter the number of units consumed:");
// let amount = 0;
// console.log("total used unit",unit);

// if (unit <= 100) {
//   amount = unit * 0.6;
// } else if (unit <= 300) {
//   amount = 100 * 0.6 + (unit - 100) * 0.8;
// } else {
//   amount = 100 * 0.6 + 200 * 0.8 + (unit - 300) * 0.9;
// }

// if (amount < 50) {
//   amount = 50;
// }

// if (amount > 300) {
//   amount += amount * 0.15;
// }

// console.log("Total amount to be paid: Rs. " + amount.toFixed(2));

//#####9. eligible for voting or not #####=>

// let age = Number(prompt("Enter the age :-"));
// console.log(age)

// if (age >= 18) {
//   console.log("eligible to vote.");
// } else {
//   console.log("not eligible to vote.");
// }

//#####10. #####=>

// let basicSalary = Number(prompt("Enter the basic salary:"));

// let hra, da, grossSalary;

// if (basicSalary <= 5000) {
//   hra = basicSalary * 0.08;
//   da = basicSalary * 0.2;
// } else if (basicSalary <= 10000) {
//   hra = basicSalary * 0.12;
//   da = basicSalary * 0.3;
// } else if (basicSalary <= 15000) {
//   hra = basicSalary * 0.15;
//   da = basicSalary * 0.4;
// } else {
//   hra = basicSalary * 0.2;
//   da = basicSalary * 0.5;
// }

// grossSalary = basicSalary + hra + da;

// console.log("Gross Salary: " + grossSalary);

//#####11#####=>

// Compute taxes for a given income slab rates as follows...
// a. slab 1... 0-2500: 0%
// b. slab 2... 2500-5000: 10%
// c. slab 3... 5000-10000: 20%
// d. slab 4... 10000+: 30%
// (for each range of a given income, the tax rate is different) e.g. input: x = 5200
// divisions are 0-2500, 2500-5000, 5000-5200 calculation: 0-2500 of x: 0% of 2500 = 0 
// 2500-5000 of x: 10% of 2500 250 5000-1000 of x: 20% of 200 = 40 output: 290

  // let income = Number(prompt("Enter the income:"));
  // let tax ;
  
  // if (income <= 2500) {
  //   tax = 0;
  // } else if (income <= 5000) {
  //   tax = (income - 2500) * 0.1;
  // } else if (income <= 10000) {
  //   tax = 2500 * 0.1 + (income - 5000) * 0.2;
  // } else {
  //   tax = 2500 * 0.1 + 5000 * 0.2 + (income - 10000) * 0.3;
  // }
  // console.log("The income is ",income);
  // console.log("The tax is",tax);

  //#####12. student grade and pertances#####
  let x = Number(prompt("Enter the gujarati mark :-"));
console.log("gujarati mark :-",+x);

let y = Number(prompt("Enter the english mark :-"));
console.log("english mark :-",+y);

let z = Number(prompt("Enter the science mark :-"));
console.log("science mark :-",+z);

let marks = x+y+z;
let per = (marks *100)/300;

console.log("Total Mark :-",+marks);
console.log("Pertances :-",+per);

if(per >75)

    {
        console.log("Grade A");
    }else if(per > 60)
    {
        console.log("Grade B");
    }else if(per >45)
    {
      console.log("Grade C");
    }else if (per > 35)
    {
      console.log("Grade D");
    }else
    {
      console.log("Fail");
    }