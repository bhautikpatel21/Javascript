// Javascript "Use strict"

// In Javascript,'use strict'; states that the code should be executed in 'strict mode'. This makes it easier 
// to write good and secure JS code.

// 'use strict';

{
    // myVariable =9 ;
    // console.log(myVariable)
}

// Here, myVariable is created without declaring. This works as a global variable in javascript. However, 
// if you use this in strict mode, the program will throw an error.

// strict Mode in Variable

// int strict mode, using a variable without declaring it throws an error.

{
    // console.log("some code");

    // 'use strict' is ingored
    // "use strict";

//     x = 21; // does not throw an error

//     console.log(x);
}

// Strict Mode in function 
// You can also use strict mode inside a function.

{
    // myVariable = 9;
    // console.log(myVariable);   // 9

    // function hello()
    // {
    //     // applicable only  for this function
    //     'use strict';

    //     let string = 'hello';  // throws an error
    // }

    // hello();
}

// if you use 'use strict'; inside a function, the code inside the function will be in strict mode.

{
    // function hello(){
    //     string = 'hello';  // throws an error
    // }

    // hello();

    // Note : strict mode doesn't apply block statements with {} braces.
}

// Things Not Allowed in Strict Mode
// 1. Undecalred variable is not allowed.

{
    // 'use strict';

    // a = 'hello';  // throws an error
}

// 2. undeclared objects are not allowed.

{
    // 'use strict';

    // person = {name: 'Carls',age : 25};  // throws an error
}

// 3. Deleting an object is not allowed.

{
    // 'use strict';

    // let person = {name: 'carla'};

    // delete person;  // throws an error
}

// 4. Duplicating a parameter name is not allowed.

{
    // 'use strict';

    // function hello (p1,p1){console.log('hello')};  // throws an error

    // hello();

}

// 5. Assinging to a non-writable proparty is not allowed.

{
    // 'use strict';

    // let obji = {};

    // object.defineProperty(obji,'x',{value 42,writable : false});

    // assingnment toa a non-writable proparty

    // obj1.x = 9; // throws an error
}

// 6. assigning  to a getter-only property is not allowed.

{
    // 'use strict';

    // let obj2 = {get x(){return 17;} };

    // assignment to a getter-only property

    // obj2.x = 5; // throws an error

}

// 7.Assigning to a new prpperty on non-extensible object is not allowed.

{

    // 'use strict';
    
    // let obj = {};

    // object.preventExtensions(obj);
    // Assignment to a new property on a non-extensible object
    // obj.newValue = 'new value'; // throws an error
}

// 8. Octal stntax is not allowed.

{
    // 'use strict';

    // let a = 010; // throws an error
}

// 9. The variable name arguments and eval are not allowed.

{
    // 'use strict';

    // let argument = 'hello'; // throws an error

    // let eval = 44;
}

// 10. You cannot also use these reserved keywords in srtict mode.

// implements interface let package private protected public static yield

// Benefits of strict mode

// The use of strict mode:

// helps to writer a cleaner code

// changes previously accepted siled errors (bad syntax) into real errors and throws an error message 

// makes it easier to write "secure" Javascript