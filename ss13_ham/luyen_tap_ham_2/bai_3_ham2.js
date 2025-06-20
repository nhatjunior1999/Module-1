function tinhGiaithua (n){
    if (n < 0 && !Number.isInteger(n)){
        alert("vuilong khong nhap nguyen am")
    }
    let result = 1 ;
    for (let i = 1; i <=n ; i++) {
        result = result * i;
    }
    return result;
}
let input = +prompt("moi ban nhap vao mot so ");
let result = tinhGiaithua(input)
alert(`giai thua cua ${input} la ${result}`)