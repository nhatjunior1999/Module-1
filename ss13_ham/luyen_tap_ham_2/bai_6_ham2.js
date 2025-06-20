function inter(a) {
    if (!isNaN(a) && a > 0) {
        return `${a} là số nguyên dương`
    } else
        return ` moi bạn nhập lại`

}

let input = prompt(" mời bạn nhập vào ");
let result = inter(input);
alert(result)