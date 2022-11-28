import test, {expect} from '@utils/Fixtures';
import ENV from '@utils/ENV';
import CMAddAPP from '@CMpages/CMAddAPP';

test.describe(`CM Portal POC`, () => {

    test.beforeEach(async ({ cmLoginPage }) => {
        await cmLoginPage.visit(ENV.cmUrl);
    });

  /*  test(`Login to CM`, async({cmLoginPage, cmHeaderSection, cmAddAPI, cmLandingPage})=>{
        await test.step(`Login with ${ENV.cmAdminUser}`,async ()=>{
            await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
            expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
        });*/

      /*  test(`Login to CM`, async({cmLoginPage, cmHeaderSection, cmAddAPI, cmLandingPage})=>{
            await test.step(`Login with ${ENV.cmAdminUser}`,async ()=>{
                await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
                expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
            });
    
            await test.step(`Add API`,async ()=>{
                await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
                await cmAddAPI.createAPIusingDocument(`URL`);
            });
    
        });*/

        test(`Login to CM`, async({cmLoginPage, cmHeaderSection, cmAddAPP, cmLandingPage})=>{
            await test.step(`Login with ${ENV.cmAdminUser}`,async ()=>{
                await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
                expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
            });

            await test.step(`Add APP`,async ()=>{
                
                await cmHeaderSection.selectHeaderOption(`Apps`, `Add App`);
                await cmAddAPP.createAPP();
        });

    });
});
