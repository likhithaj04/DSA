// You are given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
//  and with the smallest space complexity possible.

// Example 1:

// Input: nums = [10,9,1,1,1,2,3,1]
// Output: [1,1,1,1,2,3,9,10]



function sortArray(nums) {
    if (nums.length < 2) return nums;

    let mid = Math.floor(nums.length / 2);

    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid);

    return merge(sortArray(leftArr), sortArray(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

let nums = [10, 9, 1, 1, 1, 2, 3, 1];

console.log(sortArray(nums));
