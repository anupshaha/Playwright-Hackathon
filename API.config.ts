import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: `tests/API/`,
    globalSetup: `src/utils/globalSetup.ts`,
    timeout: 30 * 10000,
    reporter: [
        [`list`], 
        [`html`], 
        [`allure-playwright`, {
            detail: true,
            outputFolder: `allure-results`,
            suiteTitle: false
        }]],
    use: {
        // All requests we send go to this API endpoint.
        baseURL: `http://automation2022-1-poll-mysql.aws.akana.roguewave.com:7900/`,
        extraHTTPHeaders: {
            'Accept': `application/json`,
            'Content-Type' : 'application/json'
        },
        storageState: 'storageState.json'
    }
};
export default config;