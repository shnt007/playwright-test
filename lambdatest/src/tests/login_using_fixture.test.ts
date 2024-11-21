import { test, expect } from "../utils/pom_fixture"
import * as data from "../test_data/login_test_data.json"

test.describe('Login Page', async () => {
    test.beforeEach(async ({ baseURL, loginPage }) => {
        await loginPage.navigateTo(`${baseURL}route=account/login`)
    })

    test('Login Test with valid credential', async ({ page, loginPage }) => {
        await loginPage.Login(data.valid_data.email, data.valid_data.password)

        // Assertions
        await expect(page).toHaveTitle('My Account')
        await expect(page.locator(`(//h2[@class='card-header h5'])[1]`)).toHaveText('My Account')

    })
    test('Login Test with invalid credential', async ({ page, loginPage }) => {
        await loginPage.Login(data.invalid_data.email, data.invalid_data.password)

        // Assertions
        await expect(page.locator(`(//div[@id='account-login']//div)[1]`)).toContainText('Warning: No match for E-Mail Address and/or Password.')
    })
})