class AccountData {
    constructor() {
        this.balance = 1000
        this.history = []
    }

    getBalance() {

        return this.balance
    }

    creditAccount(date, amount, accountHistory) {

        this.balance += amount

        const transaction = {transactionType: "credit", date: date, amount: amount, newBalance: this.balance}

        const statement = accountHistory.getHistory()

        statement.push(transaction)

        return this.balance
    }

    debitAccount(date, amount, accountHistory) {

        this.balance -= amount

        const transaction = {transactionType: "debit", date: date, amount: amount, newBalance: this.balance}

        const statement = accountHistory.getHistory()

        statement.push(transaction)

        return this.balance
    }

}


class AccountHistory {
    constructor() {
        this.history = []
    }

    getHistory() {

        return this.history
    }

    printStatement() {

        return this.history 
    }
}

module.exports = {
    AccountData: AccountData,
    AccountHistory: AccountHistory
  }