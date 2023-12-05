
// string => collection of characters (Arrays)

// let txt;
// let str = "hellow World";
// str = 'skill Qude';

// txt = "Hello guys'fjntddng";
// txt = 'Hello guys"fjntddng';

// console.log(txt);


// string Method 

// length -> property 
// slice(start position, end position)
// substring(start position, end position)
// substr(start position lenght)
// toUpperCase -> upper case convert
// toLowerCase -> lopwer case convert
// charAt -> return index charater 
// charCodeAt -> return index charater ASCII value 
// concat -> merge two string

// let data = "Javascript is the world's most popular programing language.";

// consoile.log(data.lenght)

// console.log(data.slice(5,12));     // cript i
// console.log(data.slice(25));   // starting to rest of all string
// console.log(data.slice(-12,-3));   // last to counting


// console.log(data.substring(5,12));      // cript i
// console.log(data.substring(25));      // starting to rest of all string
// console.log(data.substring(-12));      // counting yo 0
// console.log(data.substring(-12,5));     // counting to 0


// console.log(data.substr(5,12));     // cript is the 
// console.log(data.substr(-15,12));     // mming langua


// console.log(data.toUpperCase());
// console.log(data.toUpperCase());


// console.log(data.concat(" Hello world","\n skillQode"));

// let data = "Javascript is the world's most popular programing language.";

// console.log(data.replace("world","SkillQode"));
// console.log(data.replace(/World/i,"SkillQode"));

// console.log(data.replaceAll("world","Skillqode"));

// let txt = "       hello world        ";
// console.log(txt);
// console.log(txt.trim());       // remove extra space
// console.log(txt.trimStart());     // remove extra space from start
// console.log(txt.trimEnd());      // remove extra space from end
// console.log ("Length is : ",+(txt.trimEnd()).lenght);

let txt = "1234";
console.log(txt.padStart(8,"-"));
console.log(txt.padEnd(8,"*"));

console.log(data.split("a"));