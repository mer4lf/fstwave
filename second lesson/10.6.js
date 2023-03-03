"use strict"

function isPrime(a){
    for(let i = 2; i <= +a*0.5;i++){
        if(+a % i === 0){
            return false
        }
    }
    return true
}

let n = 10

for(let i = 2; i < n; i++){
    if (isPrime(i)) alert(i)
}