// You are given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k, otherwise return false.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

let nums=[1,2,3,1],k=3

function containsNearbyDuplicate(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            while (j < nums.length){
                if (nums[i] == nums[j] && Math.abs(i - j) <= k) return true
                else {
                    j++
                }
            }
        }
            return false

        
    }


    console.log(containsNearbyDuplicate(nums,k));
 