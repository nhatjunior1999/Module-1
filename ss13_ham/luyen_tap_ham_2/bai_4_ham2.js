function minNumber(a, b, c) {
    let min = Math.min(a, b, c)
    alert(min + "là số nhỏ nhất ")

}
let inputA = prompt("mời bạn nhập số a ");
let inputB = prompt("mời bạn nhập số b ");
let inputC = prompt("mời bạn  nhập số c ");
let  resultMin = minNumber(inputA,inputB,inputC);
alert(resultMin)
// so sánh if else :
function soNhoNhat (a,b,c){
    if (a < b ){
        if (a < c){
             alert(a + " là số nhỏ nhất")
        }else{
             alert(c + " là số nhỏ nhat")
        }
    }else {
        if (b<c){
             alert(b + "là số nhỏ nhất")
        }else {
             alert(c+"là số nhỏ nhất")
        }
    }
}