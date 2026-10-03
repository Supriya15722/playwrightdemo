import {Before, After, setDefaultTimeout} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";
setDefaultTimeout(30 * 1000);

Before(async function ()
{
   this.browser= await chromium.launch({headless: false});
   this.context= await this.browser.newContext();
   this.page= await this.context.newPage();
})

After(async function()
{
    this.browser.close();
})