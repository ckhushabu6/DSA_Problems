// Diversity
// Description
// You are given an array of size n containing the income of n families and a diversity constant k.
// You have to choose maximum number of families such that the income of any two families differs by no more than k to accommodate them in the same society.
function maxFamiliesWithDiversity(n, k, arr) {
    // Write code here
    //sliding window -sort arr
    let a = arr.sort((a , b)=> a - b);
    let left= 0 ; 
    let MaxFamily = -Infinity;
    for(let right = 0 ; right< n ; right++){
      if(arr[right] - arr[left] <= k){
        MaxFamily = Math.max(MaxFamily , right-left+1)
      }
      while( left <= right && arr[right] - arr[left] > k){
        left++;
      }
    }
    console.log(MaxFamily);
}