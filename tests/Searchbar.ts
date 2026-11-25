import { chromium,firefox,Page,Browser,test,expect, FrameLocator, Locator} from "@playwright/test";
import { waitForDebugger } from "node:inspector";

async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  await page.goto("https://www.ebay.com/");

  await page.locator(".fake-btn");

 await page.getByPlaceholder("Search for anything").fill("Lenovo thinkpad");
await page.getByRole('button',{name:'Search'}).click();

  

    
}

loginTest();