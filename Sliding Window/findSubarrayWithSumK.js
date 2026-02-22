// Sum of subarray II
// Description
// You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K.

// Function to check if there is a subarray with sum K
function findSubarrayWithSumK(arr, n, k) {
//write code here
let start = 0 ;
let sum =0 ;
for(let end = 0 ; end<n ; end++){
  
  sum += arr[end]
  while(sum > k && start < end){
    sum -= arr[start];
    start++;
  }
  if(sum == k){
    console.log('Yes');
    return
  }
  }
  console.log('No');
  //brute force 
// for(let i = 0 ; i<n ; i++){
//   let sum = 0 ; 
//   for(let j = i ; j<n ; j++){
//     sum +=arr[j];
//     if(sum == k){
//       console.log('Yes');
//       return;
//     }
//   }
// }
// console.log("No");
}

