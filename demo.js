//  || : javascript settimeout : || 

 setTimeout(function, milliseconds);

    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed

    function greet() {
        console.log('Hello world');
    }
    // greet();
    setTimeout(greet, 2000);
    console.log('This message is shown first');
    console.log('1 Today to much Rain...');
