console.log(" Wecome Sanu Kumar , Start Learning Java Script");
console.log("I love Java Script");

let fullName = "Sanu Kumar";  
console.log(fullName);
const age = 24;
price = 99.99;
x = null;
y = undefined;
console.log(y);

isFollow = "False";
console.log(isFollow);

// let is the variable that cannot be re-decodeURI;lared but can be updated
let z = 23;
z = 21;
z = 45;
console.log(z); //ans=45

// const is the variable that cannot be re-declared or updated

const c = 23;
console.log(c); //ans=error

// we can define variable using let in different blocks
{
   let a =5;
   console.log(a);
}
{
    let a =10;
    console.log(a);
}

let d = BigInt("124");
let e = Symbol("Hello!");


// object data type

const student ={
    fullName : "Sanu Kumar",
    age:19,
    cgpa:7.41,
    isPass:true,

};

student["age"] = student["age"] +1
console.log(student["age"])

// practice problrm 1

const product = {
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270,

};
console.log(product);

// practice problem 2

const profile = {
    username:"@sanukumar",
    isFollow: false,
    followers:123,
    following:123,

};
console.log(profile);