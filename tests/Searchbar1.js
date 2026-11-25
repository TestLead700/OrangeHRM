"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
async function loginTest() {
    let browser = await test_1.chromium.launch({ channel: 'chrome', headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    //await page.locator(".fake-btn").click();
    //await page.waitForLoadState("domcontentloaded");
    await page.locator("#twotabsearchtextbox").waitFor();
    await page.locator("#twotabsearchtextbox").fill("Lenovo");
    await page.waitForTimeout(5000);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);
    await page.keyboard.press("Enter");
    await page.waitForLoadState("domcontentloaded");
    await page.locator("xpath = /html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]").waitFor();
    let VisibleResults1 = await page.locator("xpath = /html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]");
    console.log("Total Results1:" + await VisibleResults1.count());
    for (let j = 0; j < await VisibleResults1.count(); j = j + 1) {
        let text1 = await VisibleResults1.nth(j).innerText();
        console.log("Total Names1:" + text1);
        let child1Promise = context.waitForEvent('page');
        await page.locator("xpath = /html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[2]/div/div/div[1]").click();
        let child1Window = await child1Promise;
        await child1Window.waitForLoadState();
        //await child1Window.close();
    }
}
loginTest();
