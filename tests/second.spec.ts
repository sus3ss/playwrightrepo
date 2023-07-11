

import { chromium, expect } from "@playwright/test";


(async () => {
    //creating broser instance
    const browser =await chromium.launch({
        headless: false
    });
    
    const browserInstance=await browser.newContext();

    const page=await browserInstance.newPage();
    await page.goto("http://eaapp.somee.com");
    //Using xpath
   // await page.locator("//a[@id='loginLink']").click();

    //using css selector
    //await page.locator("#loginLink").click();
   // await expect(page).toHaveURL("http://eaapp.somee.com/Account/Login");

   //await page.click("a:has-text('Login')");

   //await page.click("text=Login")
   await page.locator("text=Login").click();
   await page.locator('input[name="UserName"]').fill('admin');
   await page.locator('input[name="Password"]').fill('password');

   await page.locator('text=Log in').click();
   await expect(page).toHaveURL('http://eaapp.somee.com/')
   await page.locator('text=Employee List').click();
   //await page.locator('text=Edit').first().click();
   await page.locator('text=Edit').nth(4).click();
   //await page.close();
})();