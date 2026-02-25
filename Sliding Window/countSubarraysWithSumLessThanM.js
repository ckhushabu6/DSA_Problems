// Function to count the number of subarrays with sum less than M
function countSubarraysWithSumLessThanM(arr, n, m) {
//write code here
//bruteForce
// let count = 0 ; 
// for(let left = 0 ; left < n ; left++){
//   let sum = 0 ; 
//   for(let right = left ; right < n ; right++){
//     sum += arr[right];
//     if(sum < m){
//       count++;
//     }
//   }
// }
// console.log(count);

let left = 0 ; 
let count = 0; 
let sum =0 ;
for(let right = 0 ; right<n ; right++){
  // Expand window
  sum +=arr[right];
 // Shrink window if invalid
  while(left <= right && sum >= m){
    sum -= arr[left];
    left++;
  }
    // All subarrays ending at 'right'
    // and starting from left → right are valid
  count += (right - left + 1);
}
console.log(count);
}