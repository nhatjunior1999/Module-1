let veHinhTron = function (radius) {
    this.radius = radius
}
veHinhTron.prototype.getRadius = function () {
    return this.radius
}
veHinhTron.prototype.getArena = function () {
    return Math.PI * this.radius * this.radius
}
let HinhTron = new veHinhTron(5)
let a  =  HinhTron.getRadius()
let b = HinhTron.getArena().toFixed(2)
alert("radius = " + a + " area " + b)
//----------------
class Circle{
    constructor(radius) {
        this.radius = radius
    }
    getRadius(){
        return this.radius
    }
    getArea(){
        return Math.PI * this.radius * this.radius
    }

}
let ac = new Circle(8);
let c = ac.getRadius()
let d = ac.getArea()
console.log(d.toFixed(5))