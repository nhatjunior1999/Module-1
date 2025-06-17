let data = [1,2,3,4,5,6,7,8,9];
let first = 0 ;
let last = data.length - 1;
while (first < last){
    let ac =  data[first];
    data[first] = data[last];
     data[last] = ac;
        first++ ;
        last--;
}