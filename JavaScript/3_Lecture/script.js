// for(let i = 1;i<=5;i++){
//     console.log("Sanu Kumar");
// }
// console.log("loop has ended");

// Calculate sum of 1 to 5
let sum = 0;
let n = 5;
for(let i = 1; i<=n;i++){
    sum = sum +i;
}
console.log("sum is ",sum);
console.log("loop has ended");

//while loop
// let i = 1;
// while(i<=5){
//     console.log("i =",i);
//     i++;
// }

// do while loop
// let i = 20;
// do{
//     console.log("Sanu Kumar");
//     i++;
// }while(i<=10);

// for-of loop
// let str = "SanuKumar";

// let size = 0;
// for(let i of str){ // Iterator -> Character
//     console.log("i=",i);
//     size++;
// } 
// console.log("String Size is :",size);

//for in loop
let student = {
    name:"Sanu Kumar",
    age: 19,
    cgpa:7.5,
    isPass:true,
};

for (let key in student){
    console.log("key=",key, "value",student[key]);
}

//practice 1
for (let i =0;i<=100;i++){
    console.log(i);
}

//practice 2
for (let i =0;i<=100;i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//practice 3
// let gameNum = 25;
// let userNum = prompt("Guess the game number :");
// while(userNum != gameNum){
//     userNum = prompt("You Entered wrong number. Guess again :");
// }
// console.log("Congratulation , you entered the last number");




//Strings 

// let str = "Sanu Kumar";
// console.log(str[8]); //m

//Template Literals

let specialString  = `This is a Template Literal`;
console.log(typeof specialString);

let obj ={
    item: "pen",
    price:10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("The cost of",obj.item, "is" , obj.price , "rupees");

// String Methods in JS 

let str = "Sanu Kumar";
console.log(str.toUpperCase()) //SANUKUMAR
console.log(str.toLowerCase()) //sanukumar
console.log(str.trim()) //removes whitespaces from forth and back side
console.log(str.slice(0,4)) //return part of string
console.log(str.replace("S","J"));
console.log(str.charAt(3)); // u

let str1 ="Sanu";
let str2 = " Kumar";

console.log(str1.concat(str2));

let fullname = prompt("Enter your Full name without Spaces: ");
let username = "@" + fullname +fullname.length ;
console.log(username);




