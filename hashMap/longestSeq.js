// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4

let nums=[2,20,4,10,3,4,5]


function  longestConsecutive(nums) {
       let hs=new Set(nums)
       let maxl=0

       for(let i of nums){
        if(!hs.has(i-1)){
         let count=1
         let temp=i+1

         while(hs.has(temp))
         {
           count+=1
           temp+=1
         }
         maxl=Math.max(maxl,count)
       }
       }
       return maxl
    }

    console.log(longestConsecutive(nums));
    