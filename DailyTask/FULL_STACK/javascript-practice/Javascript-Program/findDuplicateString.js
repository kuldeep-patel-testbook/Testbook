// identifies duplicate elements or strings in an array

function findDuplicate(array) {
    console.log("original array => ", array);
    // Initilize Sets   
    let seen = new Set(); //Seen Keeps track of unique elements
    let duplicates = new Set(); // Stores elements that appear 

    for(let str of array) { //loop through array
        
        if(seen.has(str)) { // if an element is already in seen, it's duplicate -> Add to duplicates array
            duplicates.add(str);
        } else { // if not add it to seen
            seen.add(str);
        }
    }
    return [...duplicates]; // Convert the set to an array and return it
}

const array = ["Apple","Avacado","Banana","Watermelon","Kiwi","Banana","Orange","Kiwi"];
console.log(findDuplicate(array));
