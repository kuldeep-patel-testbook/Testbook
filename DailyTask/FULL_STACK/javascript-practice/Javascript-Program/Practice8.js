// Check if Number is Prime

const isPrime = (num) =>{
    if(num<=1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        //console.log(i)
        if(num % i === 0) return false;
    }
    return true;
        
};

console.log(isPrime(12));
