let a = +prompt("  nhập vào số tiền doanh thu " , " ")
let amout = a * 0.03;
if (a === 0 || a ==="" || isNaN(a)) {
    alert("mời bạn nhập lại")
}else {
    alert("số tiền hoa hồng bạn nhận được là : " + amout.toFixed(2))
}

