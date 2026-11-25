"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({ channel: 'chrome', headless: false });
    let page = await browser.newPage();
    await page.goto("https://www.makemytrip.com/");
    await page.waitForLoadState();
    await page.locator("xpath = //label[@for = 'departure']").click();
    await page.locator(".commonModal__close").click();
    let NextButton = page.getByLabel("Next Month");
    while (!(await page.getByText("March 2027").isVisible())) {
        await NextButton.click();
    }
    await page.waitForLoadState("domcontentloaded");
    await page.getByLabel("Mon Mar 08 2027").waitFor();
    await page.getByLabel("Mon Mar 08 2027").click();
}
loginTest();
