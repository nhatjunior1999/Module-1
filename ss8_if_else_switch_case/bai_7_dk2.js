let a = +prompt("nhập hệ số a :");
let b = +prompt("nhập hệ số b :");
let c = +prompt("nhập hệ số c :");
let delta = (b * b) - (4 * a * c)
let delta2 = (-b + Math.sqrt(delta)) / (2 * a);
let delta3 = (-b - Math.sqrt(delta)) / (2 * a);
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                alert("phương trình có vô số nghiệm ")
            } else {
                alert("phương trình vô nghiệm")
            }
        } else {
            let x = -c / b
            alert("nghiệm của phương trình x là " + x.toFixed(2))
        }
    } else if (delta < 0) {
        alert(" chương trình vô nghiệm")
    } else if (delta === 0) {
        let x = -b / (2 * a)
        alert(" phương trình có 1 nghiệm duy nhất" + x.toFixed(2))
    } else {
        alert(" phương trình co 2 nghiệm  là " + delta2 + " nghiệm 2 là : " +  delta3)
    }
} else {
    alert(" moi bạn nhập lại")
}

