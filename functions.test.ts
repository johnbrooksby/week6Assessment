const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('be a valid function', () => {
        expect(typeof (shuffleArray)).toBe("function")
    })
    test('be greater than 4', () => {
        expect(shuffleArray([1, 2, 3, 4, 5]).length).toBeGreaterThan(4)
    })
})