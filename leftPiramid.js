let prompt=require('prompt-sync')();
let n =Number(prompt('enter a number : '));

// for(let i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(' *')
//     }console.log();
    
// }


for(let i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(` ${j}`)
    }console.log();
    
}