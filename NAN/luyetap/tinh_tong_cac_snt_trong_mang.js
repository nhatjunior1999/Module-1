let n;
do{
    n = prompt("mời nhập vào số nguyen duong n <= 50")

}while (isNaN(n) || n <= 0 || n > 50 || n %1 !== 0)
//  nhập mảng số nguyên
let arr = []
for (let i = 0; i < n; i++) {
    let so ;
    do {
        so =  +prompt(`nhập phần tử thu ${i+ 1}`)
    }while (isNaN(so) || so %1 !==0 || so < 0 )
    arr.push(so)
}
// kiem tra so nguyen to
function prime (number){
    if (number < 2){
        return false
    }
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0){
            return false
        }
    }
    return  true

}


let sum =0;
for (let i = 0; i < arr.length; i++) {
    if (prime(arr[i])){
        sum += arr[i]
    }
}


alert("tổng các số nguyên tố trong mảng là  : " + sum)