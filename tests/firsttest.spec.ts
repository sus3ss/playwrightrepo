import { webkit } from "@playwright/test";
(async () => {
    //creating broser instance
    const browser =await webkit.launch({
        headless: false
    });
    
    const browserInstance=await browser.newContext();

    const page=await browserInstance.newPage();
    await page.goto("https://www.google.com");
    await browser.close();
})();