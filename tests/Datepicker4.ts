import { chromium, Browser, Page, Locator } from "@playwright/test";

async function loginTest(): Promise<void> {

    let browser: Browser = await chromium.launch({
        channel: "chrome",
        headless: false
    });

    let page: Page = await browser.newPage();

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

    let NextButton: Locator = page.locator(".DayPicker-NavButton--next");

    // Navigate to March 2027
    for (let i: number = 0; i < 12; i++) {

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