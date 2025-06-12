function kiemTraNamNhuan(){
   let year =  +document.getElementById("yearInput").value;
   if(year % 4 === 0 && year % 100 !== 0){
     document.getElementById("result").innerText = year +  " là năm nhuận";
   } else if(year % 100 == 0 || year % 400 !== 0){
       document.getElementById("result").innerText = year + " không phải là năm nhuận"
   } else if(year % 400 == 0){
       document.getElementById("result").innerText= year + "là năm nhuận"
   }
}
