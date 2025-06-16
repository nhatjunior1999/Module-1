let year = prompt("nhâp vào các tháng trong 1 năm : ")


if (year > 0 && !isNaN(year)){
    if (year === 1 || 2 || 3) {
        alert(` tháng của ban nhập ${year}là  tháng thuôc quý 1`)
    } else if (year === 4 || 5 || 6) {
        alert(` tháng của ban nhập ${year}là  tháng thuôc quý 2`)

    } else if (year === 7|| 8 || 9){
        alert(` tháng của ban nhập ${year}là  tháng thuôc quý 3`)

    }else if (year === 10 || 11 || 13){
        alert(` tháng của ban nhập ${year}là  tháng thuôc quý 4`)
    }
} else {
    alert(` mời bạn nhập lại `)

}