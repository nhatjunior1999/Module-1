let a = 0;
let b = 1
let nextNumber;
console.log("Fibonacci 20 số đầu là")
for (let i = 1; i <= 20; i++) {
    console.log(a);
    nextNumber = a + b ;
     a = b ;
     b = nextNumber;
}