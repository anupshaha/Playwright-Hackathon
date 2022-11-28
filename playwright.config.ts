import { PlaywrightTestConfig } from "@playwright/test";
const test_env = process.env.test_env;

if (!test_env || ![`local`, `qa-82`].includes(test_env)) {
    process.env.test_env =`qa-82`;
    // console.log(`Please provide a correct environment value like "npx cross-env ENV=local"`);
    // process.exit();
  }

const config: PlaywrightTestConfig = {
    timeout: 30000,
    retries: 0,
    workers: 4,
    reporter: [
        [`list`], 
        [`html`], 
        [`allure-playwright`, {
            detail: true,
            outputFolder: `allure-results`,
            suiteTitle: false
        }], 
      [`junit`, {outputFile: `./playwright-report/junit.html`}]],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 30000,
        ignoreHTTPSErrors: true,
        video: `retain-on-failure`,
        screenshot: `only-on-failure`,
        trace: `retain-on-failure`
    },
    globalSetup: `src/utils/globalSetup.ts`,

    testDir:`tests/E2E/PM`,

    projects: [
        {
            name: `Chromium`,
            use: { browserName: `chromium` }
        },
        {
            name: `Firefox`,
            use: { browserName: `firefox` }
        },
        {
            name: `Webkit`,
            use: { browserName: `webkit` }
        },
    ],
};

export default config;