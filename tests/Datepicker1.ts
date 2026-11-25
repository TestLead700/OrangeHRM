import { chromium,firefox,Page,Browser,test,expect, FrameLocator, Locator} from "@playwright/test";
import { waitForDebugger } from "node:inspector";
async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  
  await page.goto("https://www.makemytrip.com/");
  await page.waitForLoadState();


await page.locator("xpath = //label[@for = 'departure']").click();
await page.locator(".commonModal__close").click();

let NextButton: Locator = page.getByLabel("Next Month");

while(!(await page.getByText("March 2027").isVisible()))
{
    
    await NextButton.click();
    
}

await page.waitForLoadState("domcontentloaded");
await page.getByLabel("Mon Mar 08 2027").waitFor();
await page.getByLabel("Mon Mar 08 2027").click();
    
}

loginTest();
