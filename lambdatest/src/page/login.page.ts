import { Page } from "@playwright/test";
import loginLocators from "../locators/login.locators";
import { BasePage } from "../base/BasePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async Login(email: string, password: string) {
        await this.type(loginLocators.email, email)
        await this.type(loginLocators.password, password)
        await this.click(loginLocators.btnLogin)
    }
}
