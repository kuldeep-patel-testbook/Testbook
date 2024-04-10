/*
4. Write a Program to find the first circular tour that visits all petrol pumps and return
-1 if no such tour exists.

Input: arr[] = {{4, 6}, {6, 5}, {7, 3}, {4, 5}}.
Output: 1

Explanation: If started from 1st index then a circular tour can be covered. There
are N petrol pumps (say arr[]) that are present in a circular path. It consists of the
distance of the next petrol pump from the current one (in arr[i][1]) and the amount
of petrol stored in that petrol pump (in arr[i][0]).
The problem is to find the index of the first starting point such that the truck can
visit all the petrol pumps and come back to that starting point. (Assume a truck
with infinite capacity that consumes 1 unit of petrol to travel 1 unit distance.)
*/

// A petrol pump has petrol and distance to next petrol pump
class petrolPump {
    constructor(petrol, distance) {
        this.petrol = petrol;
        this.distance = distance;
    }
};

// The function returns starting point if there is a possible solution otherwise returns -1
const printTour = (arr, n) => {
    // Consider first petrol pump as a starting point
    let start = 0;
    let end = 1;
    let curr_petrol = arr[start].petrol - arr[start].distance;
    /* Run a loop while all petrol pumps are not visited. And we have reached first petrol pump again with 0 or more petrol */
    while (end != start || curr_petrol < 0) {
        // If current amount of petrol in truck becomes less than 0, then // remove the starting petrol pump from tour
        while (curr_petrol < 0 && start != end) {
            // Remove starting petrol pump. Change start
            curr_petrol -= arr[start].petrol - arr[start].distance;
            start = (start + 1) % n;
            // If 0 is being considered as start again, then there is no
            // possible solution
            if (start == 0)
                return -1;
        }
        // Add a petrol pump to current tour
        curr_petrol += arr[end].petrol - arr[end].distance;
        end = (end + 1) % n;
    }
    // Return starting point
    return start;
}

let arr = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7,3)];
let n = arr.length;
let start = printTour(arr, n);
(start == -1) ? console.log("No solution") : console.log(`Start = ${start}`);