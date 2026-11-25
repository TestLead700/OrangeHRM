"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({ channel: 'chrome', headless: false });
    let page = await browser.newPage();
    await page.goto("https://www.ebay.com/");
    await page.locator(".fake-btn");
    await page.getByPlaceholder("Search for anything").fill("Lenovo thinkpad");
    await page.getByRole('button', { name: 'Search' }).click();
}
loginTest();
