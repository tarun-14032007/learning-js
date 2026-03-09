/*function functionName(){

}

function greet(){
    console.log("Hello");

}

greet();


function sum(a,b){
    return a+b;
}

let x=sum(2,3);
console.log(x);
*/
/*
function sq(x){
    return x*x;
}

console.log(sq(4));
*/
/*let cnt=0;

function abc(x){
    for(let i=0;i<x.length;i++){
        let ch=x[i];
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' ||ch=='u'){
            cnt++;
        }
    }

    return cnt;
}

let ans=abc("aaa");
console.log(ans);*/

let arr=[10,20,25,30,35];

let na = arr.filter((val)=>{
    return val%10===0;

})

document.getElementById("res").innerHTML=na.join(" , ");


let check=()=>{
    let inputname=document.getElementById("name").value;
let inputpass=document.getElementById("pass").value;
if(inputname==="tarun"&&inputpass==="1234"){
    //console.log("correct");
    //alert("Done!!");
    document.getElementById("res").innerHTML="corrrect logic";
}
else{
    //alert("wrong");
    document.getElementById("res").innerHTML="wrong!!";

}
}

