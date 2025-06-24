class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return `dien tich hinh chu nhat la :` + this.length * this.width;
    }

    getPerimeter() {
        return `chu vi hinh chu nhat la : ` + 2 * (this.length + this.width)
    }

    draw(ctx, x = 10, y = 10, color = "lightblue") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.width, this.height);

        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, this.width, this.height);
    }

}
let a = new rectangle(150,100);
let dienTich = a.getArea()
let chuVi = a.getPerimeter()
console.log(chuVi)
console.log(dienTich)
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
rect.draw(ctx);