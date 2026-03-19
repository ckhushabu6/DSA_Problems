/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length ; 
    let totalSum = (n * (n + 1))/2;
    let numsTotal = nums.reduce((a , c) => {
        console.log( a, c);
        return a+c;
    });
    let missNum = totalSum - numsTotal ; 
    return missNum;
};