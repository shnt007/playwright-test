import { test, expect } from '../utils/pom_fixture';
import * as data from "../test_data/register_test_data.json"

test.describe('Register', async () => {
    test.beforeEach(async ({ baseURL, registerPage }) => {
        await registerPage.navigateTo(`${baseURL}route=account/register`)
    })

    test('Regsiter', async ({ page, registerPage }) => {
        await registerPage.register(data.firstname, data.lastname, data.email, data.phone_number, data.password);
        await expect(page).toHaveTitle('Your Account Has Been Created!')
    })
})
