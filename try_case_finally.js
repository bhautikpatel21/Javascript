// Javascipt try...catch...finally statement

// The try,catch and finally blocks are used to handle excceptions (a type of an error).

// Types of Errors 

// syntax Error : Error in the syntax. For example,if you write console.log('your result');, the above program throws a stntax error.
// the spelling of console is a ,istake in the above code.

//  Runtime Error : This type of error occurs during the exectuin of the program. For example .

// calling an invalid function or a variable.

// Javascript try... catch statement

{

    // The try... catch statement is used to handle the exceptions.

    // try{
    //     // body or try
    // }
    // catch(error){
    //     // body of catch
    // }

    // The main code is inside the try block . while executing the try block, if any error occurs, it goes to the catch block. the catch block 
    // handle the errors as per the catch statements.

}

// Display Undeclared variable 
{
    // // Program to show try... catch in a program

    // const numerator = 100 , denominator = 20;
    // try {
    //     console.log(numerator/denominator);

    //     // forgot to define variable a

    //     console.log(a);
    //     console.log('Helloo');
    // }
    // catch(error){
    //     console.log('An error caught');
    //     console.log('Error message : ',+ error);
    // }
}

// Javascript try... catch...funally statement

// You can also use the try..catch...finally statement to handle exeptions. the fginnaly block executes
// when the code runs succassfuly or if error occurs.

{
    // try {
    //     // try statement 
    // }
    // catch (error){
    //     // catch statement
    // }
    // finally(){
    //     // codes that geta executed anyway
    // }
}

// try....catch...finally Example
{
//     const numerator = 100, denominator = 20;

//     try {
//         console.log(numerator/denominator);
//         console.log(a);
//     }
//     catch(error){
//         console.log('an error caught');
//         console.log('Error message :',+ error);
//     }
//     finally {
//         console.log('Finally will wxecuted every time');
//     }

//     // You need use catch or finally statement after try statement. Otherwise, try program will throw an error
//     //SyntaxError : Missing catch or finally after try.
}

// Javascript throw statement 

// The syntax of throw statement is 
{
    // throw expression;
}
{
    // const number = 5;
    // throw number/0; // generate an exception when divided bya 0
}

// Javascript throw with try...catch
{
//      try {
//         // body of try 
//         // throw exception;
//     }
//     catch(error){
//         // body o catch
//     }
}

// try...catch...throw Example
{
    const number = 10;
    try {
        if (number > 50){
            console.log('success');
        }
        else{
            // user-define throw statement
            throw new Error('The number is low');
        }
        // if throw executes, the below code does not execute
        console.log('hello');
    }
    catch(error){
        console.log('an error caught');
        console.log('Error message : ',+ error);
    }
}