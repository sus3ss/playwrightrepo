import {  test, firefox,expect } from "@playwright/test";

test("Navigating to launge of warehouse website", async ({page}) => {
  // const browser = await chromium.launch({
  //   headless: false
  // });

  // const browserinst = await browser.newContext();
  // const page = await browserinst.newPage();
  await page.goto("https://www.thewarehouse.co.nz/");
  await expect.soft(page).toHaveURL("https://www.thewarehouse.co.nz/");
  await page.locator("//button[@data-test-id='category-root']").hover();
  await page.locator(".mega-menu-root-list >> #category-homegarden").hover();
  await page
    .locator( 
      " #category-homegarden-shopbyroom >> #category-homegarden-shopbyroom-lounge"
    )
    .click();
    var title= await page.locator('.title').textContent();
    await expect.soft(title).toBe("Lounges");
    await expect.soft(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehousea");
    await expect(page.locator(".mega-menu-root-list >> #category-homegarden")).toHaveId("category-homegarden");



});
