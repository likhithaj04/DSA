// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. However, you can buy it then immediately sell it on the same day. Also, you are allowed to perform any number of transactions but can hold at most one share of the stock at any time.

// Find and return the maximum profit you can achieve.

// Example 1:

// Input: prices = [7,1,5,3,6,4]

// Output: 7
let prices=[7,1,5,3,6,4]

function  maxProfit(prices) {
    let r=1,profit=0
    for(let i of prices){
    if(i>prices[r]) {
    }
    else if(i<prices[r]){
      profit+=prices[r]-i
    }
    r+=1
  }
return profit
}
    console.log(maxProfit(prices));
    