/*let sum=0;

for(let i=0;i<=5;i++){
    sum+=i;
}

console.log("sum is ",sum);

let str="hi hellol lol";
let size=0;

for(let i of str){
    console.log("i = ",i);
    size++;
}

console.log("size of str is ",size);


let st = {
    name:"Tarun",
    age:19,
    cgpa:9.23,
    isPass:true
};

for(let key in st){
    console.log("Key: ",key, " Value: ", st[key]);
}*/


for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);

    }
}

let ans=25;
let num=prompt("Enter ur number:");

while(num!=ans){
    num=prompt("Enter ur number its wrong:");
}

console.log("lets go!");
