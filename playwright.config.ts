import { PlaywrightTestConfig } from "@playwright/test";
const test_env = process.env.test_env;

if (!test_env || ![`local`, `qa-82`, `qa-2`].includes(test_env)) {
    process.env.test_env = `qa-2`;
    // console.log(`Please provide a correct environment value like "npx cross-env ENV=local"`);
    // process.exit();
}

const config: PlaywrightTestConfig = {
    timeout: 180 * 1000,
    retries: 0,
    workers: 4,
    reporter: [
        [`list`],
        [`html`, { outputFolder: `./playwright-report/html/` }],
        [`allure-playwright`, {
            detail: true,
            outputFolder: `./allure-results`,
            suiteTitle: false
        }],
        [`junit`, { outputFile: `./playwright-report/junit/junit.html` }]],
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 180 * 1000,
        ignoreHTTPSErrors: true,
        video: `retain-on-failure`,
        screenshot: `only-on-failure`,
        trace: `retain-on-failure`,
        // All requests we send go to this API endpoint.
        baseURL: `http://automation2022-1-poll-mysql.aws.akana.roguewave.com:7900/`,
        extraHTTPHeaders: {
            'Accept': `application/json`,
            'Content-Type': 'application/json'
        },
        storageState: 'storageState.json'
    },
    globalSetup: `src/utils/GlobalSetup.ts`,

    testDir: `tests/E2E/Demo`,

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