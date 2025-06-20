function numberAllchange(a, b) {
    let x = a
    a = b
    b = x
    return `sau khi đổi a là ${a} và b là ${b}`
}

let change = +prompt("mời nhập vào số a ");
let changS = +prompt("mời nhập vào số b ");
let result = numberAllchange(change, changS);
if (!isNaN(change)&& !isNaN(changS)) {
    alert(result)

}
else {
    alert("mời bạn nhập lại")
}
