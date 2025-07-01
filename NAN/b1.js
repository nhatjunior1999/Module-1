// kiểm tra 1 số có phải số nguyên tô hay không .
function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
let n  ;
do {
    n = prompt("nhập vào số phần tử n (n <= 50 ) : ");
    if (isNaN(n) || n <= 0 || n > 50 || n % 1 !== 0){
        alert("Vui Lòng nhập vào số nguyên dương")
    }else {
        let a = [];
        let b = [];
        for (let i = 0 ; i < n ; i++){
            a[i] = parseInt(prompt(`nhap phan tu thu ${i+1} :`));
            if (isPrime(a[i])){
                b.push(a[i]);
            }
        }
    document.write("mang a : " + a.join(",") + `<br>`)
    document.write("mang b (so nguyen to )" + b.join(",") + "<br>")
    }
}while (isNaN(n) || n <= 0 || n > 50 || n % 1 !== 0);