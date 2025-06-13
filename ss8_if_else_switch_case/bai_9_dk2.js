let a = Number(prompt("Nhap canh a "));
let b = Number(prompt("Nhap canh b "));
let c = Number(prompt("Nhap canh c "));

if (a > 0 && b > 0 && c > 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a + b > c && b + c > a && a + c > b) {
        alert(" 3 canh la canh cua tam giac")
    } else {
        alert(" khong phai 3 canh cua tam giac ")
    }

} else {
    alert("moi ban nhap lai")
}