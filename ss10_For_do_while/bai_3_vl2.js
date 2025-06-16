for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

// goc vuong o tren ben trai
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>")
}
//
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            document.write("&nbsp")
        } else {
            document.write("*")
        }
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")
document.write("<br>")

//
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j < i) {
            document.write("&nbsp")
        } else {
            document.write("*")
        }
    }
    document.write("<br>");
}
document.write("<br>")
document.write("<br>")
document.write("<br>")



