"use strict";
class BankAccount {
    accountNumber;
    ownerName;
    balance;
    depositCount = 0;
    constructor(accountNumber, ownerName, initialDeposit = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        if (initialDeposit < 0) {
            console.error('Initial deposit cannot be negative. Setting balance to 0.');
            this.balance = 0;
        }
        else {
            this.balance = initialDeposit;
            if (initialDeposit > 0) {
                this.depositCount = 1;
            }
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.depositCount++;
            const depositType = this.depositCount === 1 ? 'First Deposit' : 'Subsequent Deposit';
            console.log(`${this.ownerName} deposited $${amount}. New balance: $${this.balance} (${depositType})`);
        }
        else {
            console.log(`ERROR: ${this.ownerName}, deposit amount must be positive. Amount entered: $${amount}`);
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log(`ERROR: ${this.ownerName}, withdrawal amount must be positive. Amount entered: $${amount}`);
        }
        else if (amount > this.balance) {
            console.log(`ERROR: ${this.ownerName}, withdrawal of $${amount} failed - insufficient funds.`);
        }
        else {
            this.balance -= amount;
            console.log(`${this.ownerName} withdrew $${amount}. New balance: $${this.balance}`);
        }
    }
    getDepositCount() {
        const depositType = this.depositCount === 1 ? 'First Deposit' : 'Subsequent Deposit';
        return [this.depositCount, depositType];
    }
    getBalance() {
        return this.balance;
    }
}
// --- Test the corrected class ---
console.log('--- Creating account with initial deposit ---');
const userAccount = new BankAccount(101, 'Charlie', 50);
console.log(`Account created for ${userAccount.ownerName}. Initial balance: $${userAccount.getBalance()}`);
console.log();
userAccount.deposit(100);
userAccount.deposit(25);
userAccount.withdraw(20);
userAccount.deposit(50);
userAccount.withdraw(200);
const userDepositCount = userAccount.getDepositCount();
console.log(`Final Deposit Count: ${userDepositCount[0]}. Final Deposit Type: ${userDepositCount[1]}, Final balance for ${userAccount.ownerName}: $${userAccount.getBalance()}`);
console.log('\n--- Creating account with no initial deposit ---');
const noDepositAccount = new BankAccount(102, 'Daniel');
console.log(`Account created for ${noDepositAccount.ownerName}. Initial balance: $${noDepositAccount.getBalance()}`);
console.log();
noDepositAccount.withdraw(10);
noDepositAccount.withdraw(-10);
noDepositAccount.withdraw(0);
noDepositAccount.deposit(0);
noDepositAccount.deposit(-10);
noDepositAccount.deposit(10);
noDepositAccount.withdraw(10);
const noDepositDepositCount = noDepositAccount.getDepositCount();
console.log(`Final Deposit Count: ${noDepositDepositCount[0]}. Final Deposit Type: ${noDepositDepositCount[1]}, Final balance for ${noDepositAccount.ownerName}: $${noDepositAccount.getBalance()}`);
