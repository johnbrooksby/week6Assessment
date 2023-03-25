
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('"See all bots" button pulls information when clicked', async () => {
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(1000)
    const cardAppears = await driver.findElement(By.id('bot-name-selector-id'))
    expect(cardAppears.isDisplayed()).toBeTruthy()
    await driver.sleep(1000)
})

test('"Clicking the "Draw button creates a button with text "Add to Duo"', async () => {
    await driver.findElement(By.id('draw')).click()
    const cardAppears2 = await driver.findElement(By.xpath('//div/button[text()="Add to Duo"]'))
    expect(cardAppears2.isDisplayed()).toBeTruthy();
    await driver.sleep(3000)
})


// const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
//     expect(newMovie.isDisplayed()).toBeTruthy()