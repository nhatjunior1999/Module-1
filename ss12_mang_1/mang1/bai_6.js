let arr = [3, 5, 7, 2, 9, 1, 6, 8, 4, 10];
let v = +prompt(" nhập vào số nguyên cần tìm");
let found = true;
for (let i = 0 ; i <arr.length ; i++){
    if (arr[i] === v){
        found = true;
        break;// nếu true sẽ dừng vòng lawph và thực hiện kiếm tra điều kiện if bên dưới
    }
    if (found) {
        console.log(`${v} is in the array`);
    } else {
        console.log(`${v} is not in the array`);
    }

}