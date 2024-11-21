import { Page } from "@playwright/test"
import * as locator from "../utils/locators.json"
import { BasePage } from "../base/basepage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    async Login(selectDP: string, username: string, password: string) {

        await this.click(locator.LoginPage.dpDropdown)
        await this.type(locator.LoginPage.searchDPField, selectDP)
        await this.click(locator.LoginPage.dpLists)

        await this.type(locator.LoginPage.username, username)
        await this.type(locator.LoginPage.password, password)
        // await this.page.click(locator.btnLogin)
    }
}




// export class LoginPage extends BasePage {
//     constructor(page: Page) {
//         super(page);
//     }
//     async Login(selectDP: string, username: string, password: string) {

//         await this.page.click(locator.LoginPage.dpDropdown)
//         await this.page.fill(locator.LoginPage.searchDPField, selectDP)
//         await this.page.locator(locator.LoginPage.dpLists).first().click()

//         await this.page.fill(locator.LoginPage.username, username)
//         await this.page.fill(locator.LoginPage.password, password)
//         // await this.page.click(locator.btnLogin)
//     }
// }


