/*let a=5;
let b=2;

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);

console.log("a^b=",a**b);
console.log("a%b=",a%b);

*/

/*
alert("alert msg!"); //one time popup

let number=prompt("Enter a number:");

if(number%5===0){
    console.log(number," is multiple of 5");
}

else{
    console.log(number," is not a multiple of 5");
}*/

let marks=prompt("Enter marks:\n");
let grade;

if(marks>=90&&marks<100){
    grade='S';
}

else if(marks>=80&&marks<89){
    grade='A';
}

else{
    grade='C';
}

console.log("Grade acc to ur marks is ",grade);