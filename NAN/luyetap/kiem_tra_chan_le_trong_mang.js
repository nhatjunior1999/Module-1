let n ;
do {
    n = prompt("nhập vào 1 số nguyên dương <100")
}while (isNaN(n) || n <= 0 || n > 50|| n % 1 === 0 )
let arr = [];
for (let i = 0 ; i < n ; i++){
    let so;
    do {
        so = +prompt(`nhập phần tu thứ ${i + 1}`)
    }while (isNaN(so) || so % 1 !== 0)
}