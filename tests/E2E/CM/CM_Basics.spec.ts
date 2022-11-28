import test, {expect} from '@utils/Fixtures';
import ENV from '@utils/ENV';

test.describe(`CM Portal POC`, () => {

    test.beforeEach(async ({ cmLoginPage }) => {
        await cmLoginPage.visit(ENV.cmUrl);
    });

    test(`Login to CM`, async({cmLoginPage, cmHeaderSection, cmAddAPI, cmLandingPage})=>{
        await test.step(`Login with ${ENV.cmAdminUser}`,async ()=>{
            await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
            expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
        });

        await test.step(`Add API`,async ()=>{
            await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
            await cmAddAPI.createAPIusingDocument(`URL`);
        });

    });
});