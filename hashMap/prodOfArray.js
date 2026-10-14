// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O(n)
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]

let nums= [1,2,4,6]

function productExceptSelf(nums) {
      let ans=[]
      ans[0]=1

      let suffix=1

      for(let i=1;i<nums.length;i++){
        ans[i]=ans[i-1]*nums[i-1]
      }
      for(let i=nums.length-2;i>=0;i--){
        suffix*=nums[i+1]
        ans[i]*=suffix
      }
      return ans
    }

    console.log(productExceptSelf(nums));
    