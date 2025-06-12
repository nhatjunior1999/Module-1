let a = prompt(" nhập độ dài cạnh a ")
let b = prompt(" nhập độ dài cạnh b ")
let dienTichTamGiac = (a * b) / 2
if (dienTichTamGiac > 0 && !isNaN(dienTichTamGiac)) {
    alert("dien tich tam giac la : " + dienTichTamGiac + " m2")
}else {
    alert(" moi ban nhap lai")
}
