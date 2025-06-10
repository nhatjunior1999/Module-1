function Cong(){
let a =  +document.getElementById('num1').value;
let b =  +document.getElementById('num2').value;
let Result;
    Result = Number(a) + Number(b);
document.getElementById('ketQua').innerHTML=Result ;
}
function Tru(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let Result;
    Result = Number(a) - Number(b);
    document.getElementById('ketQua').innerHTML=Result ;
}
function Nhan(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let Result;
    Result = Number(a) * Number(b);
    document.getElementById('ketQua').innerHTML=Result ;
}
function Chia(){
    let a =  +document.getElementById('num1').value;
    let b =  +document.getElementById('num2').value;
    let Result;
    Result = Number(a) / Number(b);
    document.getElementById('ketQua').innerHTML=Result ;
}