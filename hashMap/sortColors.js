// You are given an array nums consisting of n elements where each element is an integer representing a color:

// 0 represents red
// 1 represents white
// 2 represents blue
// Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).

// You must not use any built-in sorting functions to solve this problem.


// Example 1:

// Input: nums = [1,0,1,2]

// Output: [0,1,1,2]


let nums=[1,0,1,2]
function sortColors(nums) {

         let left=0,right=nums.length-1,mid=0

    while(mid<=right){
      if(nums[mid]==0){
          [nums[left],nums[mid]]=[nums[mid],nums[left]]
          left+=1  
          mid+=1        
      }
      else if(nums[mid]==2 ){
    [nums[mid],nums[right]]=[nums[right],nums[mid]]
         right-=1
    }
    else{
        mid+=1
    }
    
    }
    return nums

}

console.log(sortColors(nums));

