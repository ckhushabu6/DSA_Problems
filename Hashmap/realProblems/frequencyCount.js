function frequencyCount(arr){
    let obj = {};
    for(ele of arr){
        if(obj[ele]){
            obj[ele]++;
        }else{
            obj[ele] = 1;
        }
    } 
    return obj
}
let arr = [1,2,1,3,2,1];
let str = "khushabu"
console.log(frequencyCount(arr));
console.log(frequencyCount(str));