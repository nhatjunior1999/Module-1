let check = document.getElementById("check");
check.addEventListener("click",  oncheck);
function oncheck(){
    let input = document.getElementById("input").value;
    if (0 < input && input <= 120) {
        result.innerText = " đây là tuổi của một con người " + input
    } else{
        result.innerText = " số tuổi không hợp lệ mời bạn nhập lại"
    }
}