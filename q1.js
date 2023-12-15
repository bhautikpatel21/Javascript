//  ||  REVERSE NUMBER  ||

// let arr = Number (prompt("Enter the number : "));

// let r = a(arr);

// console.log("Currect number is : ",arr);
// console.log("Reverse Number is : ",r);

// function a(n){
//     let sum = 0;
//     while (n!=0){
//         sum = sum * 10 + n % 10;
//         n=Math.floor(n/10);
//     }
//     return sum;
// }

//  function arr(str){
//     return str.split('').sort().join('');
//  }
//  console.log(arr("bhautik"));

// function arr(str){
//     return  str.
// }
// console.log("kanubhai kacharavala surat");

 
Number = int(input(" Please Enter any Number: "));
let i;
Sum = 0
for i in range(1, Number):
    if(Number % i == 0):
        Sum = Sum + i
if (Sum == Number){
    print(" %d is a Perfect Number" %Number)
     }
else{
    print(" %d is not a Perfect Number" %Number)
}