// JavaScript and JSON

// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.

{
    // // JSON syntax
    // {
    //     "name": "John",
    //     "age": 22,
    //     "gender": "male",
    // }
}

// In JSON, the data are in key/value pairs separated by a comma(,).

// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.


// JSON Data

// JSON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon(:). For example,

{
    // JSON data
    // "name": "John"
}

// Note: JSON data requires double quotes for the key.


// JSON Object

// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,

{
    // JSON object
    // { "name": "John", "age": 22 }
}

// JSON Array

// JSON array is written inside square brackets [ ].

{
    // // JSON array
    // [ "apple", "mango", "banana"]

    // // JSON array containing objects
    // [
    //     { "name": "John", "age": 22 },
    //     { "name": "Peter", "age": 20 }.
    //     { "name": "Mark", "age": 23 }
    // ]
}

// Note: JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.

// Accessing JSON Data

// You can access JSON data using the dot notation.

{
    // // JSON object
    const data = {
        "name": "John",
        "age": 22,
        "hobby": {
        "reading" : true,
        "gaming" : false,
        "sport" : "football"
        },
        "class" : ["JavaScript", "HTML", "CSS"]
    }

    // // accessing JSON object
    // console.log(data.name); // John
    // console.log(data.hobby.gaming); // { gaming: false, reading: true, sport: "football"}
    // console.log(data.class); // [ 'JavaScript', 'HTML', 'CSS' ]

    // console.log(data.hobby.sport); // football
    // console.log(data.class[1]); // HTML
}

// We use the . notation to access JSON data. Its syntax is: variableName.key

// You can also use square bracket syntax [] to access JSON data. 

{
    // // JSON object
    // const data = {
    //     "name": "John",
    //     "age": 22
    // }

    // // accessing JSON object
    // console.log(data["name"]); // John
}

// JavaScript Objects VS JSON

// Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.

// Converting JSON to JavaScript Object

// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

{
    // // json object
    // const jsonData = '{ "name": "John", "age": 22 }';
    // console.log(jsonData);
    // // converting to JavaScript object
    // const obj = JSON.parse(jsonData);

    // // accessing the data
    // console.log(obj); // John
    // console.log(obj.age); // John
}


// Converting JavaScript Object to JSON

// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. 

{
    // // JavaScript object
    // const jsonData = { name: "John", age: 22 };

    // // converting to JSON
    // const obj = JSON.stringify(jsonData);

    // // accessing the data
    // console.log(obj);
}

// Use of JSON

// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.


// let person = {
//     firstName: "Hello",
//     lastName: "world",
// }


// let ABC = {
//     "firstname": "Skill",
//     "lastname": "Qode",
//     "age" : 10
// }

// // console.log(person);
// // console.log(person.firstName);
// // console.log(ABC);
// // console.log(ABC.age);


// const bhavik = JSON.stringify(person);
// console.log(bhavik);