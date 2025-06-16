// let i = 0;
// for (;i <10 ; i++){
//     if(i === 3 ){
//         continue
//     }
//
//     console.log(i)
// }
/*let a = {fisrtName : "nhat" , lastName :"long"};
for (let p in a ){
    console.log(a[p]);
}*/
// for of
/*let a = "long nhat"
for ( let b of a){
    console.log(b)
}*/
//for each
// let ny = [
//     {
//         id: 1,
//         hovaten: "tolongnhat"
//         , gioitinh: "nam"
//
//     },
//     {
//         id: 2
//         , hovaten: "hoangquynhnga"
//         , gioitinh: "nu"
//
//
//     }
// ]
// ny.forEach(function
//         (nys) {
//         console.log(nys)
//
//     }
// )

// let text = prompt(" he llo nhap ten cua b")
//
// while (text !== "nhat"){
//     alert("xin moi ban nhap lai")
//     text = prompt("nhap ten cua b")
//
// } alert("chuc mung ban")]
let num = +prompt("Nhập vào một số");  // Dấu + để ép kiểu về số
let total = 0;

for (let i = 1; i <= num; i++) {
    total += i;
}

alert("Tổng từ 1 đến " + num + " là: " + total);




