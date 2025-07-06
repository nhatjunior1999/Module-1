let name = ["an", "binh", "chi", "dung", "ha"];
while (true) {
    let aName = prompt("moi ban nhap vao");
    let found = false;
    for (let i = 0; i < name.length; i++) {
        if (aName === name[i]) {
            alert(` tim thay gia ${aName} tai vi tri index = ${i}`)
            found = true;
            break;
        }
    }

    if (found) {
         break;
    }else {
        alert("vui long moi ban thu lai")
    }

}

