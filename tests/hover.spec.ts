import { chromium } from "@playwright/test";

(async()=>{
    const browser=await chromium.launch({
        headless:false
    }
        
    );

    const browserinst=await browser.newContext();
    const page=await browserinst.newPage();
    await page.goto("https://www.thewarehouse.co.nz/");
    await page.locator("//button[@data-test-id='category-root']").hover();
    await page.locator('.mega-menu-root-list >> #category-homegarden').hover();
    await page.locator(' #category-homegarden-shopbyroom >> #category-homegarden-shopbyroom-lounge').click();


})()

