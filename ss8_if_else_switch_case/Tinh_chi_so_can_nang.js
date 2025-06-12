let canNang = +prompt("how much do you weigh : ");
let chieuCao = parseFloat(prompt("how tall are you : "));
let bmi = canNang / (chieuCao * chieuCao);
if(bmi < 18.5){
    document.write(` You Uderweight , BMI is : ${bmi.toFixed(2)} `)
} else if( bmi <=25.5 ){
    document.write(` You Normal , BMI is : ${bmi.toFixed(2)} `)
} else if( bmi <= 30){
    document.write(` You Overweight , BMI is : ${bmi.toFixed(2)} `)
} else {
    document.write(` You Obese , BMI is : ${bmi.toFixed(2)} `)
}
