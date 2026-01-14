let prompt=require('prompt-sync')();
let n =Number(prompt('enter a number : '));

for(let i=1;i<=n;i++){
    for(let j=1;j<=2*n;j++){
        if(i===j || j===(2*n-i)){
            process.stdout.write("*") 
        }else{
             process.stdout.write(" ") 
        }
    }console.log();
    
}