let arr=[250,645,300,900,50];
let sum=0;

console.log(arr);
console.log(arr.length);


for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

console.log(`the avg si ${sum/arr.length}`);

// arrays are mutable whereas strings are immutable

let n=[];

for(let i=0;i<arr.length;i++){
    n[i]=arr[i]*.9;
}
console.log(n);


n.push(125,22,456);
console.log(n);

console.log(n.pop());
console.log(n.pop());
console.log(n.pop());

let n22=n.toString();
console.log(n22);


