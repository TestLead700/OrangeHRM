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
    await page.waitForLoadState("domcontentloaded");
    // Close login popup
    await page.keyboard.press("Escape");
    /*
    // If popup remains, try clicking outside
    if (await page.getByText("PERSONAL ACCOUNT").isVisible()) {
        await page.mouse.click(50, 450);
    }
*/
    // Open departure calendar
    await page.locator("label[for = 'departure']").click();
    let NextButton = page.locator(".DayPicker-NavButton--next");
    // Navigate to March 2027
    for (let i = 0; i < 12; i++) {
        if (await page.getByText("March 2027").isVisible()) {
            break;
        }
        await NextButton.click();
    }
    // Select date 20
    await page.getByText("20", { exact: true }).nth(1).click();
    console.log("Date Selected");
    //await browser.close();
}
loginTest();
