import { Page } from '@playwright/test'
import { BasePage } from '../base/BasePage'
import registerLocator from '../locators/register.locators'

export class RegisterPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    async register(firstname: string, lastname: string, email: string, phone: string, password: string): Promise<void> {
        await this.type(registerLocator.firstname, firstname)
        await this.type(registerLocator.lastname, lastname)
        await this.type(registerLocator.email, email)
        await this.type(registerLocator.telephone, phone)
        await this.type(registerLocator.password, password)
        await this.type(registerLocator.confirmpassword, password)
        await this.check(registerLocator.acceptsubscribe)
        await this.check(registerLocator.acceptPolicy)
        await this.click(registerLocator.btnContinue)
    }
}
