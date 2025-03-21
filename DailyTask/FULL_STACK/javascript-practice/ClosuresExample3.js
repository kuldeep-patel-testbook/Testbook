
//createBankAccount(initialBalance) creates a closure by returning an object with functions.
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    // The balance variable is private and cannot be accessed directly from outside.
    return {
        deposit : function (amount) {
            balance += amount;
            console.log(`Deposited : $${amount}, New Balance is: $${balance}`);
        },

        withdraw : function (amount) {

            if(amount > balance) {
                console.log("Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`withdraw : $${amount}, New Balance is: $${balance}`);
            }
            
        },

        getBalance : function () {
            console.log(`Current Balance $${balance}`);
            return balance;
            // The returned functions access and modify balance while keeping it encapsulated.
        }
    }
    
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);

myAccount.getBalance();
myAccount.withdraw(2000);