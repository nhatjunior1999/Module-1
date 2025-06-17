let valueA = + prompt("moi nhap vao ");
let numbers = [-3 ,5,1,3,2,10];
let found = false ;// dat bien co
for (let i = 0 ; i < numbers.length ; i ++){
    if( valueA === numbers[i]){
        document.write("tim thay tai vi tri index : " + i)
        found =true;
        break ;
    }
}
if(!found){
    document.write("khong tim thay phan tu")
}