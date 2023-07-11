import {  test, firefox,expect } from "@playwright/test";
test.beforeEach(async({page})=>{
  await page.goto("https://www.thewarehouse.co.nz/");
  await expect(page).toHaveURL("https://www.thewarehouse.co.nz/");
})
test("Navigating to launge of warehouse website", async ({page}) => {
  
  
  await page.locator("//button[@data-test-id='category-root']").hover();
  await page.locator(".mega-menu-root-list >> #category-homegarden").hover();
  await page
    .locator( 
      " #category-homegarden-shopbyroom >> #category-homegarden-shopbyroom-lounge"
    )
    .click();
    var title= await page.locator('.title').textContent();
    await expect(title).toBe("Lounge");
    await expect(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");
    await expect(page.locator(".mega-menu-root-list >> #category-homegarden")).toHaveId("category-homegarden");

});

test.afterEach(async({page})=>{
  await page.screenshot({path:'screenshot:warehouse.png'});
  await page.close()
})
