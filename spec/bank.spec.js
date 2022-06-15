const {AccountData, AccountHistory} = require("../src/bank.js")

describe("bank", () => {
    let accountData
    let accountHistory
  
    beforeEach(() => {
      accountData = new AccountData()
      accountHistory = new AccountHistory()
    })

    it("displays account balance", () => {
      // set up
      const expected = 1000
  
      // execute
      const result = accountData.getBalance()
  
      // verify
      expect(result).toEqual(expected)
    })

    it("account credited and new balance displayed", () => {
      // set up
      const expected = 1500
  
      // execute
      const result = accountData.creditAccount(15/06/2022, 500, accountHistory)
  
      // verify
      expect(result).toEqual(expected)
    })

    it("account credited and account history updated", () => {
      // set up
      accountData.creditAccount("15/06/2022", 500, accountHistory)
      const expected = [{transactionType: "credit", date: "15/06/2022", amount: 500, newBalance: 1500}]
  
      // execute
      const result = accountHistory.getHistory()
  
      // verify
      expect(result).toEqual(expected)
    })

    it("account debited and new balance displayed", () => {
      // set up
      const expected = 500
  
      // execute
      const result = accountData.debitAccount(15/06/2022, 500, accountHistory)
  
      // verify
      expect(result).toEqual(expected)
    })

    it("account debited and account history updated", () => {
      // set up
      accountData.debitAccount("15/06/2022", 500, accountHistory)
      const expected = [{transactionType: "debit", date: "15/06/2022", amount: 500, newBalance: 500}]
  
      // execute
      const result = accountHistory.getHistory()
  
      // verify
      expect(result).toEqual(expected)
    })

    it("print statement, displaying transaction history", () => {
      // set up
      accountData.debitAccount("15/06/2022", 500, accountHistory)
      const expected = [{transactionType: "debit", date: "15/06/2022", amount: 500, newBalance: 500}] 
  
      // execute
      const result = accountHistory.printStatement()
  
      // verify
      expect(result).toEqual(expected)
    })


})    