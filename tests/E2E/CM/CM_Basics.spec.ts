import test, {expect} from '@utils/Fixtures';
import ENV from '@utils/ENV';

test.describe(`CM Portal POC`, () => {

    test.beforeEach(async ({ cmLoginPage }) => {
        await cmLoginPage.visit(ENV.cmUrl);
    });

    test(`Add, Edit and Delete API`, async({cmLoginPage, cmHeaderSection, cmAddAPI, cmLandingPage, cmAPIDetailsPage})=>{
        await test.step(`Login with ${ENV.cmAdminUser}`,async ()=>{
            await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword }); 
            expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
        });

        await test.step(`Add API`,async ()=>{
            await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
            await cmAddAPI.createAPIusingDocument(`URL`);
            console.log(`New API Name:: ` + await cmAPIDetailsPage.getAPIName());
        });

        await test.step(`Rename API`,async ()=>{
            await cmAPIDetailsPage.selectOptionFromMenu(`Details`);
            await cmAPIDetailsPage.editAPIDetails(`Swagger_Petstore1_001`);
        });

        await test.step(`Delete API`,async ()=>{
            await cmAPIDetailsPage.selectOptionFromMenu(`Details`);
            await cmAPIDetailsPage.deleteAPI();
        });
    });
});