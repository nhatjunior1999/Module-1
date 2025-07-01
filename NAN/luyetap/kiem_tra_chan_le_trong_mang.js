let n ;
do {
    n = prompt("nhập vào 1 số nguyên dương <100")
}while (isNaN(n) || n <= 0 || n > 50|| n % 1 !== 0 )
let arr = [];
for (let i = 0 ; i < n ; i++){
    let so;
    do {
        so = +prompt(`nhập phần tu thứ ${i + 1}`)
    }while (isNaN(so) || so % 1 !== 0)
    arr.push(so)
}
let le = []
let chan = [];
for (let i = 0 ; i < n ; i++){
    if(arr[i] % 2 === 0){
        chan.push(arr[i])
    }else {
        le.push(arr[i])
    }

}
// 🖨️ In kết quả ra màn hình
alert("Các số chẵn: " + chan.join(", ")); // join() để nối các số thành chuỗi
alert("Các số lẻ: " + le.join(", "));
