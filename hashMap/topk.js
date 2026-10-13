// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

let nums = [1,2,2,3,3,3], k = 2;

function topKFrequent(nums, k) {
          const freq=new Map()
 for(let i of nums){
   freq.set(i,(freq.get(i)||0)+1)
  }
   let result = [...freq.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, k)
  .map(item => item[0]);
    return result
    }

  console.log(topKFrequent(nums,k));
  