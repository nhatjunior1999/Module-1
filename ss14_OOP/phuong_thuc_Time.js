class myDate {
    constructor(date = new Date()) {
        this.date = date;
    }

    getDate() {
        return this.date.getDate()
    }

    getDay() {
        return this.date.getDay()
    }

    getFullYear() {
        return this.date.getFullYear()
    }

    getHour() {
        return this.date.getHours()
    }

    getMinutes() {
        return this.date.getMinutes()
    }

    getSeconds() {
        return this.date.getSeconds()
    }

    getMilliseconds() {
        return this.date.getMilliseconds()
    }

    getTime() {
        return this.date.getTime()
    }

    showall() {
        console.log("tra ve ngay trong thang " + this.getDate())
        console.log("tra ve ngay trong tuan " + this.getDay())
        console.log("tra ve nam " + this.getFullYear())
        console.log("tra ve gio " + this.getHour())
        console.log("tra ve phut " + this.getMinutes())
        console.log("tra ve phan nghin giay " + this.getMilliseconds())
        console.log("")
        console.log("tra ve tong so giay tu nam 1970 den gio " + this.getTime())
    }


}

let a = new myDate()
a.showall()