let electric = +prompt(" mời bạn nhập vào số điện đã dùng");
let money = 0
if (electric > 0 && !isNaN(electric)) {
    if (electric <= 50) {
        money = electric * 1728;
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`);
    } else if (electric <= 100) {
        money = 50 * 1728 + (electric - 50) * 1786
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`)
    } else if (electric <= 200) {
        money = 50 * 1728 + 50 * 1786 + (electric - 100) * 2074
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`)
    } else if (electric <= 300) {
        money = 50 * 1728 + 50 * 1786 + 100 * 2074 + (electric - 200) * 2612
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`)
    } else if (electric <= 400) {
        money = 50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (electric - 300) * 2919
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`)
    } else {
        money = 50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (electric - 400) * 3015
        alert(` số tiền điện của bạn là ${money.toLocaleString()} VND`)

    }

} else {
    alert(" mời bạn nhập lại số điện của bạn")
}