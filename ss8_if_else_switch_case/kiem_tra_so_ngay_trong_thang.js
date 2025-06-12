
function month(){
    // khi nhập input vào trong hàm sẽ lấy giá trị mới nhất và ngược lại
    let input = document.getElementById("input").value;
    let month = +input;
switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById("result").innerText = ` tháng ${month} có 31 ngày`
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById("result").innerText = ` tháng ${month} có 31 ngày`

        break;
    case 2:
        document.getElementById("result").innerText = ` tháng ${month} có 28 đến 29 ngày . `

        break;
    default:
        document.getElementById("result").innerText = ` Mời bạn nhập lại  `
}
}
