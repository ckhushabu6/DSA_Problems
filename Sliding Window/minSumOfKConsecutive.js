function minSumOfKConsecutive(N, K, arr) {
   // Write code here
   let minele = 0;
   let sum = 0 ;

   for(let start =  0 ; start < K ; start++ ){
     sum += arr[start];
     minele = sum;
   }
   for(let end = K  ; end < N ; end++ ){
     sum += arr[end] - arr[end - K];
     
     minele = Math.min(minele , sum);
   }
   console.log(minele)
}