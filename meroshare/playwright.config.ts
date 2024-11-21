import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/testsuite/tests',
  fullyParallel: true,
  reporter: [['dot'], ['html']],
  // timeout: 50000,
  use: {

    baseURL: 'https://meroshare.cdsc.com.np',
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
