import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: `tests/API/`,
    timeout: 30 * 1000,
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
        baseURL: `http://api10014live.localhost:9905/`,
        extraHTTPHeaders: {
            'Accept': `application/json`
        },
    }
};
export default config;