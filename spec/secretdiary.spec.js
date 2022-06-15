const {SecretDiary, DiaryLock} = require("../src/secretdiary.js")

describe("diary", () => {
    let secretDiary
    let diaryLock
  
    beforeEach(() => {
      secretDiary = new SecretDiary()
      diaryLock = new DiaryLock()
    })

    it("get entries returns an error when the diary is locked", () => {
      // set up
      const expected = 'error, unable to get diary entries as the diary is locked'
  
      // execute
      const result = secretDiary.getEntries(diaryLock)
  
      // verify
      expect(result).toEqual(expected)
    })
  
    it("add entry returns an error when the diary is locked", () => {
      // set up
      const expected = 'error, unable to add diary entries as the diary is locked'
  
      // execute
      const result = secretDiary.addEntry(diaryLock, "the park was so nice today")
  
      // verify
      expect(result).toEqual(expected)
    })

    it("get entries returns the diary entries once the diary has been unlocked", () => {
      // set up
      diaryLock.unlock()
      const expected = []
  
      // execute
      const result = secretDiary.getEntries(diaryLock)
  
      // verify
      expect(result).toEqual(expected)
    })
  
    it("add entry returns the diary entries with the added entry once the diary has been unlocked", () => {
      // set up
      diaryLock.unlock()
      const expected = ['the park was so nice today']
  
      // execute
      const result = secretDiary.addEntry(diaryLock, 'the park was so nice today')
  
      // verify
      expect(result).toEqual(expected)
    })

    it("get entries returns an error when the diary is unlocked and then locked again", () => {
      // set up
      diaryLock.unlock()
      diaryLock.lock()
      const expected = 'error, unable to get diary entries as the diary is locked'
  
      // execute
      const result = secretDiary.getEntries(diaryLock)
  
      // verify
      expect(result).toEqual(expected)
    })
  
    it("add entry returns an error when the diary is unlocked and then locked again", () => {
      // set up
      diaryLock.unlock()
      diaryLock.lock()
      const expected = 'error, unable to add diary entries as the diary is locked'
  
      // execute
      const result = secretDiary.addEntry(diaryLock, "the park was so nice today")
  
      // verify
      expect(result).toEqual(expected)
    })



})    