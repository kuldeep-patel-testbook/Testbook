// To check if a given array of size n is sorted or not and which pattern used. [Used Like "Linear Traversal" Pattern]

function IsSorted(arr) {
	
    //ascending and descending are both set to true initially.
    let asc_order = true;
    let des_order = true;
  
    for(let i = 1; i<arr.length; i++) {
       //If any pair violates the ascending rule (arr[i] < arr[i - 1]), we set ascending = false.
      if(arr[i] < arr[i-1]) asc_order = false;

      //If any pair violates the descending rule (arr[i] > arr[i - 1]), we set descending = false.
      if(arr[i] > arr[i-1]) des_order = false;
    }
    if(asc_order) return "ascending order"; // If ascending is still true → ascending order.
    if(des_order) return "decending order"; // If descending is still true → descending order.
    return "Not Sorted"; // If both are false → not sorted.
    
  }
  
  const arr = [10,1,2,3,4,5,6,7,8,9];
  console.log(IsSorted(arr));

  /*
  Time & Space Complexity:
    Time Complexity: O(n) → Linear traversal
    Space Complexity: O(1) → No extra space used
  */
