//Given an array of integers and a number k, find the maximum sum of a subarray of size k.

function maximumSum(k, arr){
  // Write code here
  let MaxSum = Infinity;
  let sum =0 ;
  for(let i =  0; i < k ; i++){
    sum += arr[i];
    MaxSum = sum ;
  }
  for(let j = k ; j < arr.length ; j++){
    sum += arr[j] - arr[j-k]
    MaxSum = Math.max(MaxSum , sum);
  }
  console.log(MaxSum)
}
