let displayPrimeNumber = 20;
let primeCount = 0;
let number = 2;
while (primeCount<displayPrimeNumber){
    let count =0;
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