let disPlayPrimeNumBer =  20 // đây là số lượng số nguyên tố bạn muốn in ra (ở đây la 20 số )
let primeCount = 0 ; // biến này dùng biến đêếm xem đã in ra được bao nhiêu số nguyên tố
let number = 2 ; // ban đầu kiểm tra bằng số 2 vì 2 la so nguyent to
while (primeCount < disPlayPrimeNumBer){
    let count = 0;
    for(let i = 2 ; i <= number; i++){
        if (number % i ===0){
            count++;
        }
        if (count === 1){
            primeCount++;
            console.log(number);

        }
    }
    number++
}
