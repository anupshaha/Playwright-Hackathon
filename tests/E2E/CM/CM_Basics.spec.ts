import test, { expect } from '@utils/Fixtures';
import ENV from '@utils/ENV';

test.describe.only(`CM Portal POC`, () => {

    test.beforeEach(async ({ cmLoginPage }) => {
        await cmLoginPage.visit(ENV.cmUrl + `atmosphere/`);
    });

    test(`Add, Edit and Delete API`, async ({ cmLoginPage, cmHeaderSection, cmAddAPI, cmLandingPage, cmAPIDetailsPage }) => {
        await test.step(`Login with ${ENV.cmAdminUser}`, async () => {
            await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
            expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
        });

        await test.step(`Add API`, async () => {
            await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
            await cmAddAPI.createAPIusingDocument(`URL`);
            console.log(`New API Name:: ` + await cmAPIDetailsPage.getAPIName());
        });

        await test.step(`Rename API`, async () => {
            const randomNum = Math.floor(Math.random() * 90 + 10);
            await cmAPIDetailsPage.selectOptionFromMenu(`Details`);
            await cmAPIDetailsPage.editAPIDetails(`Swagger_Petstore1_` + randomNum);
        });

        await test.step(`Delete API`, async () => {
            await cmAPIDetailsPage.selectOptionFromMenu(`Details`);
            await cmAPIDetailsPage.deleteAPI();
        });
    });

    test(`Login to CM`, async ({ cmLoginPage, cmHeaderSection, cmAddAPP, cmLandingPage }) => {
        await test.step(`Login with ${ENV.cmAdminUser}`, async () => {
            await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
            expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
        });

        await test.step(`Add APP`, async () => {
            await cmHeaderSection.selectHeaderOption(`Apps`, `Add App`);
            await cmAddAPP.createAPP();
        });
    });
});
