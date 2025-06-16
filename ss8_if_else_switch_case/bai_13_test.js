let metKhoi = +prompt("mời bạn nhập vào số (m\u00B3) : ")
let tienNuoc = 0;
if (metKhoi > 0 && !isNaN(metKhoi)) {
    if (metKhoi <= 10) {
        tienNuoc = metKhoi * 5300
    } else if (metKhoi <= 20) {
        tienNuoc = 10 * 5300 + (metKhoi - 10) * 6500
    } else if (metKhoi <= 30) {
        tienNuoc = 10 * 5300 + 10 * 6500 + (metKhoi - 20) * 8000
    } else {
        tienNuoc = 10 * 5300 + 10 * 6500 + 10 * 8000 + (metKhoi - 30) * 10000
    }
    alert(` tiền nước của nhà bạn tháng này là ${tienNuoc.toLocaleString()} VND `)

} else {
    alert(" mời bạn nhập lại số (m\u00B3) ")

}