// Javascript setTimeout()

// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

{
    // setTimeout(function, milliseconds);

    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed
}

// The setTimeout() method returns an intervalID, which is a positive integer.

// Display a Text Once After 3 Second

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }
    // // greet();
    // setTimeout(greet, 2000);
    // console.log('This message is shown first');
    // console.log('1 Today to much Rain...');

    // // the setTimeout() method calls the greet() function after 2000 milliseconds (2 second).

    // let x = setInterval(greet, 2000);
    // clearInterval(x);
}

// The setTimeout() method returns the interval id. 

{
    // // program to display a text using setTimeout method
    // function greet() {
    //     console.log('Hello world');
    // }

    // let intervalId = setTimeout(greet, 3000);
    // console.log('Id: ' + intervalId);   
    // clearInterval(intervalId);
    // console.log('Clear Interval function stop to setTimeOut function');
}

// Display Time Every 3 Second

{
    // // program to display time every 3 seconds
    // function showTime() {

    //     // return new date and time
    //     let dateTime= new Date();

    //     // returns the current local time
    //     let time = dateTime.toLocaleTimeString();

    //     console.log(time)

    //     // display the time after 3 seconds
    //     setTimeout(showTime, 3000);
    // }

    // // calling the function
    // showTime();
}

// The above program displays the time every 3 seconds.

// The setTimeout() method calls the function only once after the time interval (here 3 seconds).

// JavaScript clearTimeout()

// As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

// Use clearTimeout() Method

{
    // // program to stop the setTimeout() method

    // let count = 0;

    // // function creation
    // function increaseCount(){

    //     // increasing the count by 1
    //     count += 1;
    //     console.log(count)
    // }

    // let id = setTimeout(increaseCount, 3000);

    // clearTimeout
    // clearTimeout(id); 
    // console.log('setTimeout is stopped.');
}

// the setTimeout() method is used to increase the value of count after 3 seconds. However, the clearTimeout() method stops the function call of the setTimeout() method. Hence, the count value is not increased.

//  You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.

// You can also pass additional arguments to the setTimeout() method. 

{
    // setTimeout(function, milliseconds, parameter1, ....paramenterN);
}

// When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

{
    // // program to display a name
    // function greet(name, lastName) {
    //     console.log('Hello' + ' ' + name + ' ' + lastName);
    // }

    // // passing argument to setTimeout
    // setTimeout(greet, 5000, 'John', 'Doe');
}

// two parameters John and Doe are passed to the setTimeout() method. These two parameters are the arguments that will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.

// JavaScript CallBack Function

// Program with setTimeout()

{
    // //  program that shows the delay in execution

    // function greet() {
    //     console.log('Hello world');
    // }

    // function sayName(name) {
    //     console.log('Hello' + ' ' + name);
    // }

    // // calling the function
    // setTimeout(greet, 2000);
    // sayName('John');
}

// JavaScript Promise and Promise Chaining

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected
// A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

// For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// Create a Promise

// To create a promise object, we use the Promise() constructor.
{
    // let promise = new Promise(function(resolve, reject){
    //     //do something
    // });

    // // The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

    // // If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
}


// Program with a Promise

{
    // const count = false;

    // let countValue = new Promise(function (resolve, reject) {
    //     if (count) {
    //         resolve("There is a count value.");
    //     } else {
    //         reject("There is no count value");
    //     }
    // });

    // console.log(countValue);

    // countValue.then((result)=>console.log(result)).catch((err)=>console.log(err));
}

// JavaScript Promise Chaining

// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// JavaScript then() method

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// The syntax of then() method is

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then()

{  
    // // returns a promise

    // let countValue = new Promise(function (resolve, reject) {
    //     resolve("Promise resolved");
    //     // reject("Promise reject");
    // });
    
    // // // executes when promise is resolved successfully
    
    // countValue
    //     .then(function successValue(result) {
    //     console.log(result);
    //     })
    
    //     .then(function successValue1() {
    //     console.log("You can call multiple functions this way.");
    //     })
    //     .then(()=>{
    //         console.log('Hello Wolrd');
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });

}

// JavaScript catch() method

// The catch() method is used with the callback when the promise is rejected or if an error occurs.

{
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     reject('Promise rejected'); 
    // });
    
    // // executes when promise is resolved successfully
    // countValue.then(
    //     function successValue(result) {
    //         console.log(result);
    //     },
    // )
    
    // // executes if there is an error
    // .catch(
    //     function errorValue(result) {
    //         console.log(result);
    //     }
    // );
}

// JavaScript finally() method

{
    // // You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.
    
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     // could be resolved or rejected   
    //     // resolve("Promise resolved");
    //     reject("Promise reject"); 
    // });

    // // // // add other blocks of code
    // countValue
    // .then(result=>console.log(result))
    // .catch((err)=>console.log(err))
    // .finally(
    //     function greet() {
    //         console.log('This code is executed.');
    //     }
    // );
}



{
    // callback function

    // function greet(n){
    //     console.log("Total is: ",n);
    // }

    // function sum(a,b,myCallback){
    //     let total = a + b;
    //     myCallback(total);
    // }
    // sum(10,50,greet);
}


//  setTimeOut, callback Function, promise(resolve, reject) => always return callback function
// fullfiled -> than method,    reject -> catch method