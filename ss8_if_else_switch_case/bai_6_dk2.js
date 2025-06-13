let a = +prompt("nhập hệ số a :")
let b = +prompt("nhập hệ số b :")
if (!isNaN(a) && !isNaN(b)) {
    if (a === 0) {
        if (b === 0) {
            alert("phương trình có vô số nghiệm ")
        } else {
            alert("phương trình vô nghiệm")
        }
    } else {
        let x = -b / a
        alert("nghiệm của phương trình x là " + x.toFixed(2))
    }
} else {
    alert(" mời bạn nhập lại")
}