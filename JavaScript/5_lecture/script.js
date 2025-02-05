function myFunction(msg,n){ 
    //parameter -> input
    console.log(msg);
}

myFunction("I love JS"); //ARGUMENT

//Function -> 2 numbers , sum
function sum(x,y){
    // function parameter are local variables of function -> block scope;
     s = x+y;
     return s;
}

let val = sum(3,4);
console.log(val);


//Arrow function

//sum function
function sum(a,b){
    return a+b;
}

const arrowSum = (a,b)=>{ 
    console.log(a+b)
};

//Multiplication function 
function mul(a,b){
    return a*b;
}

const arrowMul = (a,b) =>{
    return a*b;
}


function  countVowels(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }

    return count ;
}

const countVow = (str) =>{
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }

    return count ;
}


//forEach loop

let arr = ["pune" , "delhi" , "mumbai"];

arr.forEach((val) => {
    console.log(val);
})



