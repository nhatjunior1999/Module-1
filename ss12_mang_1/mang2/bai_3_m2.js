let arr = ['a', '3', 'b', '9', 'x', '0', '7', 'h', '2', 'k'];
let count = 0 ;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])){
        count++
    }

}
document.write(" Mảng " + arr.join(",") + "<br>")
document.write(` số lượng kí tự là số ` + count)