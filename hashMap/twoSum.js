//   Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]

let nums=[3,4,5,6],target = 7
  function twoSum(nums, target) {
        let mp=new Map()
        for(let i=0;i<nums.length;i++){
            let cp=target-nums[i]
            if(mp.has(cp)) return [mp.get(cp),i]
            mp.set(nums[i],i)
        }
  }
console.log(twoSum(nums,target));

