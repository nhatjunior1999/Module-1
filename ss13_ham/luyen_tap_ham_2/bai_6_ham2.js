function inter(a) {
    return !isNaN(a) && Number.isInteger(+a) && a > 0;
}

let input = prompt(" mời bạn nhập vào ");
let result = inter(input);
if (inter(input)){
    alert(" là số nguyên dương")
} else {
    alert("mời nhập lại")
}

alert(result)