import { test, expect } from "../../utils/fixture"
import * as data from "../data/credentail.json"


test.describe('Login', async () => {
    test.beforeEach(async ({ baseURL, loginPage }) => {
        await loginPage.navigateTo(`${baseURL}/#/login`)
        // await page.pause();

    })

    test('Login with valid credentials', async ({ page, loginPage }) => {
        await loginPage.Login(data.selectDP, data.username, data.password);
        await page.close()
        //assertion
        await expect(page).toHaveURL('https://meroshare.cdsc.com.np/#/dashboard')


    })
})


// test.describe('Login', async () => {
//     test.beforeEach(async ({ page, baseURL, loginPage }) => {
//         await page.goto(`${baseURL}/#/login`)
//         // await page.pause();

//     })

//     test('Login with valid credentials', async ({ page, loginPage }) => {
//         await loginPage.Login(data.selectDP, data.username, data.password);

//         //assertion
//         await expect(page).toHaveURL('https://meroshare.cdsc.com.np/#/dashboard')
//     })
// })