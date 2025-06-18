let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let v = +prompt("moi nhap vao 1 so");
let vInTheArr = arr.indexOf(v);

// -1 ở đây là phủ định của ko tìm thấy : ko tìm thì index of trả về -1 nên suy ra phủ định của không tìm thấy là tìm thấy

if (vInTheArr !== -1) {
// dua phan tu ben phai v sang trai
    for (let i = vInTheArr; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
//     gan phan tu vao ben phai

    }
    arr[arr.length - 1] = 0;
// dua phan tu cuoi cung sang ben trai

document.write("mang da xoa" + arr)
}else {
    document.write(v + "khogn co trong mang ")
}