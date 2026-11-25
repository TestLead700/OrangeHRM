import { chromium,firefox,Page,Browser,test,expect, FrameLocator, Locator} from "@playwright/test";
import { waitForDebugger } from "node:inspector";
async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  
  await page.goto("https://www.jotform.com/form-templates/category/event-registration");
  await page.waitForLoadState();
  await page.locator("xpath = /html/body/section[2]/div/div/div[2]/div[2]/section/div/div[24]/div/div[1]/div/a/div[1]/div[1]/picture/img").click();
  
  await page.waitForTimeout(3000);
  let frame : FrameLocator = await page.frameLocator("#formPreviewArea");

  await frame.locator("#first_45").fill("Kavya");

  await frame.locator("#input_78_month").waitFor({state : "visible"});

  let dropdown : Locator = await frame.locator("#input_78_month");

  let droplist: Locator = await dropdown.locator("option");

  console.log("Droplist Count :"+ droplist.count());

  for(let i:number = 0;i< await droplist.count();i=i+1)

    {
        console.log(await droplist.nth(i).textContent());
    }

  await dropdown.selectOption({label : "January"});

  await frame.locator("#input_78_day").waitFor();

let dropdown1 : Locator = await frame.locator("#input_78_day");

  let droplist1: Locator = await dropdown1.locator("option");

  console.log("Droplist Count :"+ droplist1.count());

  for(let i:number = 0;i< await droplist1.count();i=i+1)

    {
        console.log(await droplist1.nth(i).textContent());
    }

  await dropdown1.selectOption({label : "3"});

  await frame.locator("#input_78_year").waitFor()

  let dropdown2 : Locator = await frame.locator("#input_78_year");

  let droplist2: Locator = await dropdown2.locator("option");

  console.log("Droplist Count :"+ droplist2.count());

  for(let i:number = 0;i< await droplist2.count();i=i+1)

    {
        console.log(await droplist2.nth(i).textContent());
    }

  await dropdown2.selectOption({label : "1996"});
}

loginTest();