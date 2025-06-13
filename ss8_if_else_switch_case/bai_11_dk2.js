let thue = +prompt("nhập vào số tiền Lương của bạn ");
let tien = 0;
if (thue > 0 && !isNaN(thue)) {
    if (thue <= 5000000) {
        tien = thue * 0.05;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)
    } else if (thue <= 10000000) {
        tien = 5000000 * 0.05 + (thue - 5000000) * 0.1;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    } else if (thue <= 18000000) {
        tien = 5000000 * 0.05 + 5000000 * 0.1 + (thue - 10000000) * 0.15;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    } else if (thue <= 32000000) {
        tien = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + (thue - 18000000) * 0.2;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    } else if (thue <= 52000000) {
        tien = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + (thue - 32000000) * 0.25;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    } else if (thue <= 80000000) {
        tien = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + (thue - 52000000) * 0.3;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    } else {
        tien = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + 14000000 * 0.2 + 20000000 * 0.25 + 28000000 * 0.3 + (thue - 80000000) * 0.35;
        alert(` tiền thuế thu nhập cá nhân  của bạn cần đóng  là : ${tien.toLocaleString()}`)

    }


} else {
    alert(" moi bạn nhập lại ")
}