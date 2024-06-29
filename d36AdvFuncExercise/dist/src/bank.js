/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object.
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.
*/
export function makeBank() {
    let transactionsDB = [{ customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
    //implement this
    return {
        getBalance: function (id) {
            const customer = transactionsDB.find((customer) => customer.customerId === id);
            let balance = 0;
            if (customer !== undefined) {
                for (const transaction of customer.customerTransactions) {
                    balance += transaction;
                }
                return balance;
            }
            else {
                return balance;
            }
        },
        bankBalance: function () {
            let totalBalance = 0;
            for (const transaction of transactionsDB) {
                totalBalance += this.getBalance(transaction.customerId);
            }
            return totalBalance;
        }
    };
}
