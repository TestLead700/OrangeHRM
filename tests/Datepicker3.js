"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({
        channel: "chrome",
        headless: false
    });
    let page = await browser.newPage();
    await page.goto("https://www.makemytrip.com/");
    await page.waitForLoadState();
    // Close popup
    // Open calendar
    await page.locator("xpath=/html/body/div/div/div[2]/div/div/div/div/div/div[2]/div[1]/div[3]/label").click();
    if (await page.locator(".commonModal__close").isVisible()) {
        await page.locator(".commonModal__close").click();
    }
    // Next month button
    let NextButton = page.locator("xpath=/html/body/div/div/div[2]/div/div/div/div/div/div[2]/div[1]/div[3]/div[1]/div/div/div/div[2]/div/div[1]/span[2]");
    // Navigate to March 2027
    for (let i = 0; i < 12; i++) {
        if (await page.getByText("March 2027").isVisible()) {
            break;
        }
        await NextButton.click();
    }
    // Select date 20
    await page.getByText("20", { exact: true }).nth(1).click();
    console.log("Date Selected Successfully");
    //await browser.close();
}
loginTest();
