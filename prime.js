@@ -1,12 +1,12 @@
let number=13

function checkprime(number){
    let factors=1;
    for(let i=1;i<==number;i++){
        if(number%i==0){
           
            factors++;
        }
    }
  
    if(factors===1){
        console.log("prime")
    }else{
        console.log("not prime")
    }