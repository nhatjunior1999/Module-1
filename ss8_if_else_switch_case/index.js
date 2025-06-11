let a = +prompt("mời bạn nhập vào số a");
let opera = prompt("mời bạn nhập vào dấu : ");
let b = +prompt("mời bạn nhập vào số b");
let dau = opera;
let cong = a + b;
let tru = a - b;
let nhan = a * b;
let chia = a / b;
switch (dau){
    case `+`:
        alert("Tổng " + (cong))
        break;

    case `-`:
        alert("Hiệu " + (tru))
        break;
    case `*`:
        alert(` thương ` + (nhan))
        break;
    case `/`:
        alert(` tích ` + (chia))
        break;
        default:
            alert(`Lỗi`)
}
