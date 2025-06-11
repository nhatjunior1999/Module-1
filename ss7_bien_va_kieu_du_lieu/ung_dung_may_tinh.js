function Cong(){
let a =  +document.getElementById('num1').value;
let b =  +document.getElementById('num2').value;
let result;
    result = Number(a) + Number(b);
document.getElementById('ketQua').innerHTML=result ;
}
function Tru(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let result;
    result = Number(a) - Number(b);
    document.getElementById('ketQua').innerHTML=result ;
}
function Nhan(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let result;
    result = Number(a) * Number(b);
    document.getElementById('ketQua').innerHTML=result ;
}
function Chia(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let result;
    result = Number(a) / Number(b);
    document.getElementById('ketQua').innerHTML=result ;
}