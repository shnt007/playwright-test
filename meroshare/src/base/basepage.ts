import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) { }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url)
    }

    async click(locator: string): Promise<void> {
        await this.page.click(locator)
    }

    async locator(locator: string): Promise<void> {
        await this.page.locator(locator)
    }

    async type(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text)
    }

}