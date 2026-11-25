import { chromium,firefox,Page,Browser,test,expect} from "@playwright/test";

async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php");
  let title : string = await page.title();
  console.log("title :" + title);
  if(title == "OrangeHRM - New Level of HR Management")
  {
    console.log("Title verified successfully");

  }

  else{
    console.log("Title not verified successfully");

  }

  await page.locator("[name = 'txtUserName']").fill("Kavya");
  await page.locator("[name = 'txtPassword']").fill("Kavya@!23");
  await page.locator("[name = 'Submit']").click();
  let text: string | null = await page.locator("xpath = /html/body/div[3]/ul/li[1]").textContent();
  console.log("text : "+ text);
  if(text == "Welcome Kavya")
  {
    console.log("Welcome page verified successfully - test passed");
  }

  else{
    console.log("Welcome page  not verified successfully - test failed ");
  }

await page.locator("xpath = /html/body/div[3]/ul/li[3]/a").click();
await browser.close();

}

loginTest();