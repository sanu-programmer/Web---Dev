let marks =[98,78,76,68,66,46];
console.log(marks);
console.log(typeof marks);
console.log(marks.length); //property
console.log(marks[0]); 
console.log(marks[1]); 
console.log(marks[2]);
marks[2]=75;
console.log(marks[2]); //we can change array value because array is mutable while string is immutable that's why we can't change string value
// applying for loop in array
// for(let i = 0; i<marks.length;i++){
//     console.log(marks[i]);
// }

// applying for of loop in array
for(let mark of marks){
    console.log(mark);
}

let cities = ["Delhi", "pune", "mumbai", "hydrabad" ,"gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}

let marks1 = [85,97,44,37,76,60];
let sum= 0;

for(let val of marks1){
    sum += val;

}
let avg = sum/marks.length; 
console.log(`avg marks of the class = ${avg}`);

let items = [250, 645,300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

//Array Methods

let foodItems = ["potato", "apple" ,"litchi" ,"tomato"];

console.log(foodItems);
let deletedItems = foodItems.pop(); //delete the value from last
console.log(foodItems);
console.log("deleted" , deletedItems);

console.log(foodItems.push("chips","burger", "paneer" )); //add value from last

console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);

let marvelHeroes =["thor","spiderman","ironman"];
let dcHeroes = ["superman","batman"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

marvelHeroes.unshift("antman"); //add from starting

console.log(marvelHeroes);

let val = marvelHeroes.shift(); // delete the value from starting
console.log(marvelHeroes);

console.log(heroes.slice(1,3)); //it cut some elements from arry temporarly
console.log(heroes);
console.log(heroes.splice(1,3)); //it cut some elements from arry parmanantely, it cita the last index as well
console.log(heroes);

let companies = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,1,"ola"));
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);




