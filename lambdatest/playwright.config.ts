import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  reporter: [['dot'], ['html']],

  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'off',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
