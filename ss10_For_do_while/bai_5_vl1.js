let a = 0 ;
let b = 1 ;
let sum = 0;
let nextNumber ;
for (let i = 1 ; i <= 20 ; i++ ){
    sum += a ;
    nextNumber = a +b ;
    a = b ;
    b = nextNumber
}
console.log(" tổng dãy số Fibonacci là " + sum)