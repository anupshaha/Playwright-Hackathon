import test, { expect } from '@utils/Fixtures';
import ENV from '@utils/ENV';

test.describe.parallel.only(`CM Portal POC`, () => {

    test.beforeEach(async ({ cmLoginPage, cmLandingPage }) => {
        await cmLoginPage.visit(ENV.cmUrl + `atmosphere/`);
        await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
        expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
    });

    test(`Add API and APP`, async ({ cmHeaderSection, cmAddAPI, cmAPIDetailsPage, cmAddAPP }) => {

        await test.step(`Add API`, async () => {
            await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
            await cmAddAPI.createAPIusingDocument(`URL`);
            console.log(`New API Name:: ` + await cmAPIDetailsPage.getAPIName());
        });

        await test.step(`Add APP`, async () => {
            await cmHeaderSection.selectHeaderOption(`Apps`, `Add App`);
            await cmAddAPP.createAPP();
        });

    });

    test.skip(`Login to CM`, async ({ cmHeaderSection, cmAddAPI, cmAPIDetailsPage }) => {

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

    });
});
