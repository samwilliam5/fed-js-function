// function declaration
function num(num1,num2) {
    console.log(`Addition of Two Numbers:${num1+num2}`);
}
num(50,50)
num(50,150)


//function expression
const multiply = function(a, b) {
    console.log(`Muliply of Two Numbers:${a*b}`);
}
 
// Calling function
multiply(10, 40);
multiply(10, 50);


//arrow function
const number=(num2,num3)=>
console.log(`Subraction of Two Numbers:${num2-num3}`);
number(300,200)
number(100,50)

//muliple lines of code in function
const great = (a, b) => {
    if (a > b)
        return `a is greater`;
    else
        return `b is greater`;
}
 
console.log(great(3,5));

