// you are given an integer array people where people[i] is the weight of the ith person, 
// and an infinite number of boats where each boat can carry a maximum weight of limit. 
// Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit
// Return the minimum number of boats to carry every given person.

// Example 1:

// Input: people = [5,1,4,2], limit = 6
// Output: 2

let people=[5,1,4,2],limit=6

function numRescueBoats(people, limit) {
         people.sort((a, b) => a - b);
        let l=0,r=people.length-1,count=0;
        while(l<=r){
           if(people[l]+people[r]<=limit){
            r--;
            l++;
           }
           else {
            r--
           }
           count++;
        }
        return count
    }

    console.log(numRescueBoats(people,limit));
    