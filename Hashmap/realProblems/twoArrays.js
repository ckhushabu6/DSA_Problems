function twoArray(nums1 , nums2){
    //step 1 make map of nums1 ; 
    //step 2 run second loop for finding common element if exist push into array
    let map =  new Map();
    let array = [];
    for(let num of nums1){
        if(map.has(num)){
            map.set(num , (map.get(num)|| 0)+ 1 );
        }else{
            map.set(num , 1 );
        }
    }
    console.log(map)
for(let i = 0 ; i<nums2.length ; i++){
    if(map.has(nums2[i])){
        array.push(nums2[i]);
    }
}

    return array
}


let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(twoArray(nums1 , nums2))