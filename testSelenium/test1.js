const { Builder, Key, By, Capabilities } = require("selenium-webdriver")

const chromeCapabilities = Capabilities.chrome()

const assert = require("assert")

async function test1() {
    let driver = await new Builder().forBrowser("chrome").withCapabilities(chromeCapabilities).build()

    await driver.manage().window().maximize()
    await driver.get("https://www.youtube.com")

    await driver.sleep(15000)

    let search = driver.findElement(By.id("search"))
    search.sendKeys("Digital House")

    await driver.sleep(10000)
}



test1()