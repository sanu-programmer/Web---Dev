/*This is a code that  prints 
 hello world in our console window*/
 console.log("Hello world!");

 //Arithematic operator 
//  let a =5;
//  let b =2;

//  console.log("a+b =",a+b) //7
//  console.log("a-b =",a-b) //3
//  console.log("a*b =",a*b) //10
//  console.log("a/b =",a/b) //2.5
//  console.log("a%b =",a%b) //1
//  console.log("a**b =",a**b) //25

 //Unary operator
//  console.log("a = ",a,"b = ", b);
//  a++;//6
//  console.log("a =", a); //6


//  assignment operator 
//  = += -= *= 

// comparisioon operator 
// equalto == , equalto and type  === 
// not equal to != , not equal to and type !==

// logical operator 
// logical and  &&  - if cond 1 is true and cond 2 is true then only result will be true 
// logical or II  - if any of the two operator is true then the result will be true and same thing goes with false
// logical not ! - if the statement is true result will be false and if the statement is false the result will be true

// conditional Statement 

// let mode = "light";
// let color;

// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }
// console.log(color);

let age = 16;
if(age>18){
    console.log("vote");
}
else{
    console.log("not vote");
}

let num = 7;
if(num %2 === 0){
    console.log(num," is even");
}
else{
    console.log(num,"is odd");
}

let mode = "blue";
let color;
 if(mode === "dark"){
    color = "black";
 }
 else if(mode === "blue"){
    color = "blue";
 }
 else if(mode ==="pink" ){
    color="white";
 }
 else{
    color = "white";
 }

 console.log(color);

 if(mode === "dark") console.log(mode);

//  Ternary Operators  simpler if else
 let age1 = 16;
 let result = age1>18 ? "adult" : "not adult";
 console.log(result);

 let age2 = 25; 
 age2>18 ? console.log("adult") : console.log("not adult");

alert("hello");
let name = prompt("Hii Sanu ");
console.log(name);

let num1 = prompt("Enter a number: ");
if(num1 % 5 === 0){
    console.log(num1,"is multiple of 5");
}
else{
    console.log(num1,"is not  multiple of 5");
}

let score = prompt("Enter the score:");
let grade;
if(score>=90 && score <= 100){
    console.log(grade = "A");
}
else if(score >=70 && score <= 89){
    console.log(grade = "B");
}
else if(score >=60 && score <= 69){
    console.log(grade = "C");
}
else if(score >=50 && score <= 59){
    console.log(grade = "D");
}
else if(score >=0 && score <= 49){
    console.log(grade = "F");
}





