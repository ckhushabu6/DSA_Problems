function frequencyCount(arr){
    let obj = {};
    for(let i =0 ; i<arr.length ; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }
    }
}
let arr = [1,2,1,3,2,1];

console.log(frequencyCount(arr));
