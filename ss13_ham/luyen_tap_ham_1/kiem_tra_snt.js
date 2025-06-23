let number = +prompt("moi ban nhap vao 1 so")

function primeNum() {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            alert(`so ${number} không phải là số nguyên tố`)
            return;

        }

    }
    alert(`${number} là số nguyên to`)
}


if (!isNaN(number) && Number.isInteger(number) && number > 1){
    primeNum(number)
}else {
    alert(`${number} vui lòng nhập số lớn hơn 1 `)
}