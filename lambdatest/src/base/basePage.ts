import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected readonly page: Page) { }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async click(locators: string): Promise<void> {
        await this.page.click(locators);
    }

    async type(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    async check(locators: string): Promise<void> {
        await this.page.check(locators)
    }

    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async getText(selector: string): Promise<string> {
        await this.page.waitForSelector(selector);
        return (await this.page.textContent(selector)) || '';
    }
}
