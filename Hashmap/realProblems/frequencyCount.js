function frequencyCount(arr){
    let obj = {};
    for(let i =0 ;i<arr.length ; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1 ;
        }
    }
 return obj;
}
let arr = [1,2,1,3,2,1];
let str = "khushabu"
console.log(frequencyCount(arr));
console.log(frequencyCount(str));