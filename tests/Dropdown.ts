import { chromium,firefox,Page,Browser,test,expect, FrameLocator, Locator} from "@playwright/test";

async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php");
  await page.locator("[name = 'txtUserName']").fill("Kavya");
  await page.locator("[name = 'txtPassword']").fill("Kavya@!23");
  await page.locator("[name = 'Submit']").click();
  let frame : FrameLocator = await page.frameLocator("#rightMenu");
  await frame.locator("#loc_code").waitFor();
  let dropdown : Locator = await frame.locator("#loc_code");
  let droplist: Locator = await dropdown.locator("option");

  console.log("dropdown count:",await droplist.count());

  for(let i: number = 0; i< await droplist.count();i=i+1)
  {
    console.log(await droplist.nth(i).textContent());
  }

  await dropdown.selectOption({label: "Emp. Last Name" });

  let selectedvalue: string|null = await dropdown.locator("option:checked").textContent();

  if(selectedvalue == "Emp. Last Name")
  {
    console.log("Selected value verified successfully ");

  }
  else{
    console.log("selected value not verified successfully");
  }

await frame.locator("xpath = /html/body/div/div[2]/form/div[2]/input[1]").fill("Kavya");
await frame.locator("xpath = /html/body/div/div[2]/form/div[2]/input[2]").click();

console.log(await frame.getByText("Kavya").count());

for(let i:number = 0; i< await frame.getByText("Kavya").count();i=i+1)
{
    let choosenvalue : Locator = await frame.getByText("Kavya");
    if(await choosenvalue.nth(i).isVisible())
    {
     console.log("Search value is visible");
    }
    else{
        console.log("Search value is not visible");
    }


}




}
 
loginTest();
