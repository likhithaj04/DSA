// You are given an integer array nums of size n, find all elements that appear more than ⌊ n/3 ⌋ times. 
// You can return the result in any order.


// Example 1:
// Input: nums = [5,2,3,2,2,2,2,5,5,5]
// Output: [2,5]


let  nums = [5,2,3,2,2,2,2,5,5,5]

function majorityElement(nums){
    const mp=new Map()
let n=Math.floor(nums.length/3)
let s=new Set()

for( let i of nums){
  mp.set(i,(mp.get(i)||0)+1)
  if(mp.get(i)>n) s.add(i)
}
return [...s]
}

console.log(majorityElement(nums));
