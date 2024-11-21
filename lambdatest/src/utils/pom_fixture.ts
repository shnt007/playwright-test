import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../page/login.page";
import { RegisterPage } from "../page/register.page"

type pages = {
    registerPage: RegisterPage,
    loginPage: LoginPage
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
})

export const test = testPages
export const expect = testPages.expect