class  BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    getBalance() {
        console.log(`Current balance: $${this.#balance}`);
    }
    }

    const account = new BankAccount(100);
    account.deposit(50);
    account.getBalance();