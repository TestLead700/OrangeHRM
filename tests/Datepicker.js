"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({ channel: 'chrome', headless: false });
    let page = await browser.newPage();
    await page.goto("https://ecubeapps.com/ThemesDesign/Education/School_Student_details_form.html");
    await page.waitForLoadState();
    let frame = await page.frameLocator("xpath = /html/body/section/div/div/div[2]/div/div[2]/iframe");
    await frame.locator("#F1N1").fill("Kavya");
    await frame.locator("xpath = /html/body/section/div[2]/div[7]/div/div[1]/div[3]/div[2]/div[1]/form/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div/div/span/i").click();
    let previousButton = await frame.locator("xpath = /html/body/section/div[2]/div[7]/div/div[1]/div[3]/div[2]/div[1]/form/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div/div/ul/li[1]/div/div/div/div/table/thead/tr[1]/th[1]/button");
    while (!(await frame.getByText("August 2025").isVisible())) {
        await previousButton.click();
    }
    await frame.locator("xpath = /html/body/section/div[2]/div[7]/div/div[1]/div[3]/div[2]/div[1]/form/div[1]/div[3]/div/div/div[2]/div/div[2]/div/div/div/ul/li[1]/div/div/div/div/table/tbody/tr[4]/td[6]/button").click();
}
loginTest();
