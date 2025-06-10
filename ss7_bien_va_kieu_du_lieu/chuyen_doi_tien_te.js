function ChangMoney() {
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;
    if (From == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 26050) + " VND";
    } else if (From == "VND" && To == "USD") {
        Result = "Result : " + (Amount / 26050) + " USD";
    } else if (From == "VND" && To == "VND") {
        Result = "Result : " + Amount + " VND";
    } else if (From == "USD" && To == "USD") {
        Result = "Result : " + Amount + " USD";
    } else {
        Result = "Error";
    }
    document.getElementById("Result").innerHTML = Result;

}
