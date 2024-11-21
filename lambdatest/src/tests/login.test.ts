import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/login.page";

test.describe('Login Page', async () => {
    test.beforeEach(async ({ page, baseURL }) => {
        let loginPage = new LoginPage(page)
        await loginPage.navigateTo(`${baseURL}route=account/login`)
    })

    test('Login Test with valid credential', async ({ page }) => {
        let loginPage = new LoginPage(page)
        await loginPage.Login("abcdefg2@email.com", "Password@123")
        await expect(page).toHaveTitle('My Account')
        await expect(page.locator(`(//h2[@class='card-header h5'])[1]`)).toHaveText('My Account')

        await page.close()
    })
    test('Login Test with invalid credential', async ({ page }) => {
        let loginPage = new LoginPage(page)
        await loginPage.Login("abcdefgh3@email.com", "Password@123")
        await expect(page.locator(`(//div[@id='account-login']//div)[1]`)).toContainText('Warning: No match for E-Mail Address and/or Password.')

        await page.close()
    })
})