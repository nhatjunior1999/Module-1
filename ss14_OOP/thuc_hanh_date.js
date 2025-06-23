let myDate = function (day ,month , year){
    this.day =day;
    this.month=month;
    this.year =year;
    // this.getDay =function (){
    //     return this.day
    // }
    // this.getMonth = function (){
    //     return this.month
    // }
    // this.getYear =function (){
    //     return this.year
    // }
    // this.setDay = function (day){
    //     this.day = day
    // }
    // this.setMonth = function (month){
    //     this.month = month
    // }
    // this.setYear = function (year){
    //     this.year =year
    // }

}
myDate.prototype.getDay=function (){
    return `ngày là  ${this.day}`
}
myDate.prototype.getMonth= function (){
    return `thang là ${this.month}`
}
myDate.prototype.getYear= function (){
    return `năm là ${this.year}`
}
let a  = new  myDate(2,3,2000)
let day = a.getDay()
let day1 = a.getMonth()
let day2 = a.getYear()
console.log(a)
console.log(day)
console.log(day1)
console.log(day2)
alert(a)
