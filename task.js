var a1="    Durga";
var a2="Bhavani   ";
// console.log(a1);
// console.log(a2);
console.log(a1.trimStart(a1));
// console.log(a1.toUpperCase(a1));
// console.log(a2.toUpperCase(a2));
console.log(a2.trimEnd(a2));
let resultstr=a1.concat(a2);
console.log(resultstr);
console.log(resultstr.toUpperCase(resultstr));

let middleString = "howareyounaNNA";
let middlePortion = middleString.slice(5, 11); 
let lastIndexOfChar = middlePortion.lastIndexOf('A');
let lowerCasePortion = middlePortion.toLowerCase(lastIndexOfChar);
console.log(middlePortion); 
console.log(lastIndexOfChar); 
console.log(lowerCasePortion); 
// let str="DurgaBhavAnI";
// let lastsrt1=str.charAt(11);
// console.log(lastsrt1);
// console.log(lastsrt1.toLowerCase(lastsrt1))
// // console.log(str.toLowerCase(laststr1));

let singleChar = 'a';
let concatenatedString = singleChar + 'HelloWorld';
let upperCaseString = concatenatedString.toUpperCase(concatenatedString);
let secondLastChar = upperCaseString[upperCaseString.length - 2]; 
console.log(secondLastChar);

let firstString = "JavaScript";
let secondString = "Programming";
let firstThreeChars = firstString.slice(0, 3);
let lastThreeChars = secondString.slice(-3);
let concatestring = firstThreeChars + lastThreeChars;
let finalString = concatestring.charAt(0).toUpperCase(concatestring) + 
concatestring.slice(1, -1) 

let str1 = "   hello world  ";
let str2 = "Nice Day";
let trimmedString = str1.trim(str1);
let modifiedString = trimmedString.charAt(0).toUpperCase(trimmedString) +
trimmedString.slice(1, -1) +
trimmedString.charAt(trimmedString.length - 1).toUpperCase(trimmedString);
let extractedPart = modifiedString.slice(1, 5)
let finalResult = extractedPart + " "+str2;
console.log(finalResult);

let sentece="hello there , how are you ";
let indexofAre = sentece.indexOf("are");
console.log(indexofAre);
    


