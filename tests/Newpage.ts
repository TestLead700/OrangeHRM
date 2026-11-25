import { chromium,firefox,Page,Browser,test,expect, FrameLocator, Locator} from "@playwright/test";
import { waitForDebugger } from "node:inspector";

async function loginTest():Promise<void>
{
   let browser: Browser =  await chromium.launch({channel : 'chrome', headless:false});
  let page:Page =  await browser.newPage();
  await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php");
  await page.locator("[name = 'txtUserName']").fill("Kavya");
  await page.locator("[name = 'txtPassword']").fill("Kavya@!23");
  await page.locator("[name = 'Submit']").click();
  let frame1: FrameLocator = await page.frameLocator("#rightMenu");
  let linkTexts:Locator = frame1.locator("a");
  console.log("Link text count:"+await linkTexts.count());

  for(let i:number = 6 ;i<await linkTexts.count();i=i+1)
  {

     
    await linkTexts.nth(i).click();
    let text : string = await linkTexts.nth(i).innerText();
    console.log("Link Text values:"+text);

    let frame2:FrameLocator = await page.frameLocator("xpath = //iframe[@id = 'rightMenu']");
    console.log("Frame is identified");
    
    let lastName : Locator = await frame2.locator("xpath = //input[@id = 'txtEmpLastName']");
    let value : string = await lastName.inputValue();
    

    console.log("Emp Last Name:" +value);

    await frame2.locator("xpath = /html/body/div[5]/input").click();

    let frame1: FrameLocator = await page.frameLocator("#rightMenu");

    await frame1.locator("#loc_code").waitFor();

    let dropdown : Locator = await frame1.locator("#loc_code");
    
  let droplist: Locator = await dropdown.locator("option");

  
  console.log("dropdown count:",await droplist.count());

  for(let i: number = 0; i< await droplist.count();i=i+1)
  {
    console.log(await droplist.nth(i).textContent());
  }

  await dropdown.selectOption({label: "Emp. Last Name" });

    await frame1.locator("xpath = /html/body/div/div[2]/form/div[2]/input[1]").fill(value);

    await frame1.locator("xpath = /html/body/div/div[2]/form/div[2]/input[2]").click();



  if(await text.includes(value))
{
 
  console.log("count of names found:"+ await frame1.getByText(value).count());
  console.log("Match is found");
}

else{
  console.log("Match is not found");
}

}


}
loginTest();
