// || : Javascript async/await : ||

//  we use the async keyword With a function to represent that the function is an asynchronuos function. The async functioon returns a promise
{
// async function fun_name(parameter1,parameter2,... parameterN){
    // statements
// }

// fun_name - name of the function 
// parameters - parameters that are passed to the function
}

// Async 

// the async keyword is used before the function to represent the the function is asynchronous.
{
    // async function example

    // async function f(){
    //     console.log('Async function called.');
    //     return Promise.resolve(1);
    // }
    // f();
}

// This function returns a promise, you can use the chaining method then()
{
    // async function f()
    // {
    //     console.log('Async function.');
    //    // return Promise.resolve("Good morning");
    //     return Promise.reject("reject promise");
    // }
    // f().then(function(result){
    //     console.log(result)
    // }).catch((err)=>console.log(err));
}

// Javascript await keyword

// The await keyword is used inside async function to wait for the asynchronous opearation.

// The syntax to use await is 
{
    // let result = await promise;
}

// The use of await pause the async function until the returns a result(resolve or reject) value.
{
    // a promise

    // let promise = new Promise(function (resolve,reject){
    //     setTimeout(function(){
    //         resolve('Promise resolve')},4000);
    // });

    // // async function 

    // async function asyncfunc(){
    //     // wait until the promise resolves
    //     let result = await promise;

    //     console.log(result);
    //     console.log('hello');
    // }

    // // calling the async function 

    // asyncfunc();
}

// a Promise object is created and it gets resolved after 4000 milliseconds. Here, the astncFunc() function is written using the async function.

// The await keyword waits for the promise to be complate (resolve or reject).

// Hello is displayed only after promise vlaue is available to the result variable.

// In the above program, if await is not used ,hello is displayed  before promise resolved.

// This can be usefyl if there are multiple promise in the program.

{

    let promise1 = new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve('Promise 1 resolved')
        },2000);
    });

    let promise2 = new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve('Promise 2 resolved')
        },3000);
    });

    let promise3 = new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve('Promise 3 resolved')
        },4000);
    });

    async function asyncFunc(){
        let result1 = await promise1;
        console.log(result1);

        let result2 = await promise2;
        console.log(result2);

        let result3 = await promise3;
        console.log(result3);
    }

    asyncFunc();

}

// Benefits of using async Function

// The code is more readable than using a callback or a promise.

// Error handing is simpler.

// Debugging is easier.

// Note : These two  keywords async/await were introduced in the newer version of Javascript (ES8). Some older browsers may not support the use
// of async/await. 