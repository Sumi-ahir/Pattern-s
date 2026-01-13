let prompt=require('prompt-sync')();
let n =Number(prompt('enter a number : '));

let ans=0,dig;
let copy=n;


while(n>0){
    dig=n%10;
    let fact=1
    for(let i=1;i<=dig;i++){
        fact=fact*i;
    }ans+=fact;
    n=Math.floor(n/10)
}if(copy===ans){console.log('strong')}else{
    console.log('! Strong');
    
}
