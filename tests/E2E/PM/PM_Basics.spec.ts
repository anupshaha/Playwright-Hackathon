import test from '@utils/Fixtures';
import { expect } from '@playwright/test';
import ENV from '@utils/ENV';
import * as fs from 'fs';



test.describe.parallel(`PM Portal POC`, () => {
    // const environmentVer =fs.readFileSync(`test_data/env/qa-82.json`, `utf8`);
    // const ENV = JSON.parse(environmentVer);

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.visit(ENV.pmUrl);
    });

    test(`Valid - Login to Policy Manager`, async ({ loginPage, workbenchPage, headerSection }) => {
        await loginPage.login({ username: ENV.pmAdminUser, password: ENV.pmAdminPassword });
        expect(await workbenchPage.getLeftFrameText()).toBe(`Organization Tree`);
        await headerSection.logout();
    });

    test(`Invalid - Login to Policy Manager`, async ({ loginPage }) => {
        await loginPage.login({ username: ENV.pmAdminUser, password: `aaaa` });
        const errorMsg = await (await loginPage.loginFailedMessageTxt()).innerText();
        console.log(errorMsg);
        await (await loginPage.loginFailedMessageTxt()).isVisible();
    });

    const headers = [`DASHBOARD`, `WORKBENCH`, `ALERTS`, `SECURITY`];
    headers.forEach(header => {
        test(`Header Navigation - ${header}`, async ({ loginPage, headerSection }) => {
            await loginPage.login({ username: ENV.pmAdminUser, password: ENV.pmAdminPassword });
            await headerSection.selectHeaderOption(header);
            await headerSection.logout();
        });
    });

    test.skip(`Add User Test @Smoke @Regression`, async ({ loginPage, headerSection, securityPage }) => {

        const randomNum = Math.floor(Math.random() * 90 + 10);
        const userData = fs.readFileSync(`test_data/PM/addUser.json`, `utf8`);
        const userDetails = JSON.parse(userData);

        await loginPage.login({ username: ENV.pmAdminUser, password: ENV.pmAdminPassword });
        await headerSection.selectHeaderOption(`SECURITY`, `Users`);
        await securityPage.addUser({ username: userDetails.username + randomNum, fullname: userDetails.fullname + randomNum, password: userDetails.password, firstname: userDetails.firstname + randomNum });
        await securityPage.searchUser(userDetails.username + randomNum);
        const userRow = await securityPage.getUserRowFromTable(userDetails.username + randomNum);
        await expect(userRow).toBeVisible();
        await headerSection.logout();
    });
});
