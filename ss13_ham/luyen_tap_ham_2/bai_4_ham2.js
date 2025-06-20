function number(n) {
    if (!isNaN(n)) {
        return  "là ký tự số"
    } else {
        return "không phải là số"
    }
}
let n = prompt("xin mời nhập")
let result = number(n)
alert(result)