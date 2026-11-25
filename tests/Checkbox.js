"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({ channel: 'chrome', headless: false });
    let page = await browser.newPage();
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php");
    await page.locator("[name = 'txtUserName']").fill("Kavya");
    await page.locator("[name = 'txtPassword']").fill("Kavya@!23");
    await page.locator("[name = 'Submit']").click();
    let frame = await page.frameLocator("#rightMenu");
    let checkbox = await frame.locator("xpath = //input[@type = 'checkbox']");
    console.log("checkbox count:" + await checkbox.count());
    for (let i = 1; i < await checkbox.count(); i = i + 1) {
        await checkbox.nth(i).click();
        if (await checkbox.nth(i).isChecked()) {
            console.log("checkbox verified successfully");
        }
        else {
            console.log("checkbox not verified successfully");
        }
    }
}
loginTest();
