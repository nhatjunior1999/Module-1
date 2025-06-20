function checkArr(arr, character) {
    let count = 0
    let location = -1
    let found = false
    arr = arr.split("")
    for (let i = 0; i < arr.length; i++) {
        if (character === arr[i]) {
            count++;
            found = true;
        }
    }
    if (found) {
        return `  ki tu ${character} co trong mang va so lan xuat hien la : ${count}`
    } else {
        return ` ki tu khong co trong mang va so lan xuat hien ${location}`
    }
}
let a = prompt("nhap vao mang")
let b = prompt("nhap vao ki tu")
let result  = checkArr(a,b)
alert(result)