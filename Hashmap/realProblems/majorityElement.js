function majorityElement(arr){
    //here i have not need index so i will use "for of loop";
    
    let map = new Map();
    let array = [];
    //check frequency 
    for(let nums of arr){
        map.set(nums , (map.get(nums) || 0) + 1);
        if(map.get(nums) > arr.length/2) return nums
    }
   return -1;

   
    
}


let arr = [3,3,4,2,4,,3,3,3,3 ];
console.log(majorityElement(arr));