function ChangMoney() {
    let amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;
    if (!isNaN(amount) && amount > 0) {

        console.log(amount, From, To)
        if (From === "USD" && To === "VND") {
            Result = "Result: " + (amount * 26050) + " VND";
        } else if (From === "VND" && To === "USD") {
            Result = "Result : " + (amount / 26050) + " USD";
        } else {
            Result = "Error";
        }
        document.getElementById("Result").innerHTML = Result;

    }
    else{
        alert(`ban phai nhap so hop le`)
    }
}