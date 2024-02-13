// 5 types of dayatype
// String
// Number
// Boolean
// Object
// function

// simple datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. NULL
// 7. Symbol
// 8. Object

// Object 
// 1. an Object
// 2. an Array
// 3. a Date


myName = 'balgopal'
console.log(myName+" " + typeof myName)

myNumber= 8260429141
console.log(myNumber+" " + typeof myNumber)

Booleans = true
console.log(Booleans+" "+ typeof Booleans)

info = {
    "name": "balgopal",
    "age" : 21
}
console.log('name : '+ info.name + 'age : '  + info.age+" " + typeof info)


function simpleFunction(x){
    console.log(x)
    // return x; 
}
// a(19)
console.log(simpleFunction(2)+" "+typeof simpleFunction);


let arrow = (x) => {
    console.log(x);
    return x;
};

console.log(arrow(2) + " " + typeof arrow);

// var 
// let
// const

var x=10;
console.log(x);
x=20;
console.log(x);

let y=30;
console.log(y);
y=40;
console.log(y);

const z=50;
console.log(z);
// z=60;
// console.log(60);