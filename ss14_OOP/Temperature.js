class temperature {
    constructor(celsius) {
        if (celsius < -273) {
            alert(" Nhiet do khong the nho hon -273°C (nhiet do tuyet doi) ")
            this.celsuis = -273;
        } else {
             this.celsuis = celsius;
        }

    }

    getCelsius() {
        return this.celsuis
    }

    toFahrenheit() {
        return this.celsuis * 9 / 5 + 32
    }

    toKelvin() {
        return this.celsuis + 273.15
    }

}

let tem1 = new temperature(25);
alert(`F ${tem1.toFahrenheit()} | k : ${tem1.toKelvin()}`)
alert(tem1.getCelsius())
let tem2 = new temperature(-300)
alert(tem2.getCelsius())