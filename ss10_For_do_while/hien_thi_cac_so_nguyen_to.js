let displayPrimeNumber = 20;
let primeCount = 0;
let number = 2;
let count =0;

while (primeCount<displayPrimeNumber){
    for (let i = 2; i <=number ; i++) {
        if (number%i===0){
            count++;
        }
    }
    if (count ===1) {
        primeCount++;
        console.log(number)
    }
    number++;
}