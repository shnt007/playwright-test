import { test, expect } from '@playwright/test';
import { RegisterPage } from '../page/register.page';

test.describe('Register', async () => {
    test.beforeEach(async ({ page, baseURL }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.navigateTo(`${baseURL}route=account/register`)
    })

    test('Regsiter', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.register('abcde', 'fghij', 'abcdefg2@email.com', '+9779801234567', 'Password@123',);
        await expect(page).toHaveTitle('Your Account Has Been Created!')
    })
})
