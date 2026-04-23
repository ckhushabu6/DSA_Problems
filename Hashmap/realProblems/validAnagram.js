function isAnagram(s , t){
    //step 1 check length is equal or not if no return no ;
    //step 2 find the frequency of s 
    //step 3 check same character is exist or not 
    //step 4 check frequency of character

    //______________________________________________

    //step 1
    if(s.length !== t.length) return false;
    let map = new Map ;
    //step2
    // for(let i = 0 ; i<s.length ; i++){
    //     if(map.has(s[i])){
    //         map.set(s[i] , map.get(s[i])+1);
    //     }else{
    //         map.set(s[i], 1);
    //     }
    // }
    for(let char of s){
        map.set(char , (map.get(char) || 0) +1);
    }
    //step 3
    for(let char of t){
        if(!map.has(char)) return false ;
        map.set(char , (map.get(char)||0) - 1);
        if(map.get(char) < 0) return false;
    }
return true;
}


let s = "lstten", t = "sitlent"
console.log(isAnagram(s , t));