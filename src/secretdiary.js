class SecretDiary {
    constructor() {
        this.entries = []
    }

    getEntries(diaryLock) {

        if (diaryLock.getLock() === true) {

            return 'error, unable to get diary entries as the diary is locked'
        }

        return this.entries
    }

    addEntry(diaryLock, entry) {

        if (diaryLock.getLock() === true) {

            return 'error, unable to add diary entries as the diary is locked'
        }

        this.entries.push(entry)

        return this.entries
    }
}


class DiaryLock {
    constructor() {
        this.locked = true
    }

    getLock() {

        return this.locked
    }

    lock() {

        return this.locked = true
    }

    unlock() {

        return this.locked = false
    }
}

module.exports = {
    DiaryLock: DiaryLock,
    SecretDiary: SecretDiary
  }