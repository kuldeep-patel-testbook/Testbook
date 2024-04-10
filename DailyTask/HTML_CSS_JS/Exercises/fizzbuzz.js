
//document.addEventListener('DOMContentLoaded', () => {
    // const fizzBuzz = document.getElementById('demo'); 
    // for(let i=0; i<=100; i++) {
    //     const divElement = document.createElement('div');
    //     if(i % 3 === 0  && i % 5 === 0) {    
    //         console.log("FizzBuzz");
    //         divElement.textContent = "FizzBuzz";
    
    //     } else if(i % 3 === 0) {
    //         console.log("Fizz");
    //         divElement.textContent = "Fizz";
    //     } else if(i % 5 === 0) {
    //         console.log("Buzz");
    //         divElement.textContent = "Buzz";
    //     } else {
    //         console.log(i);
    //         divElement.textContent = i;
    //     }
    //     fizzBuzz.appendChild(divElement);
    // }
//});


/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    let answer = [];
    for (let i=1; i <= n; i++) {
        let string = '';

        if (i % 3 === 0) {
            string += "Fizz";
        } 
        if (i % 5 === 0) {
            string += "Buzz";
        }
        if (string === '') {
            string += i;
        }
        answer.push(string);
    }

    return answer;
};



console.log(fizzBuzz(15));