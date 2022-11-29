import test, { expect } from '@utils/Fixtures';
import ENV from '@utils/ENV';
import Utilities from '@utils/utilities';

test.describe.parallel(`E2E Flow for Hackathon Demo`, () => {

    let APIname : string;
    let appId : string;
    let appName : string;
    let util : Utilities;

     test.beforeAll( () => {
        util = new Utilities();
     });

    test(`Add API, APP and Create Contract`, async ({ cmLoginPage, cmLandingPage, cmHeaderSection, cmAddAPI, cmAPIDetailsPage, cmAddAPP, cmSearchObjectPage, cmApiOverviewPage, cmAPIAccessPage: cmAPIAccessPage, cmApiAppPage, cmAPPDetailsPage }) => {

        await test.step(`Login to CM`, async () => {
            await cmLoginPage.visit(ENV.cmUrl + `atmosphere/`);
        });

        await test.step(`Add API`, async () => {
            await cmHeaderSection.selectHeaderOption(`APIs`, `Add API`);
            await cmAddAPI.createAPIusingDocument(`URL`);
            APIname = await cmAPIDetailsPage.getAPIName();
        });

        await test.step(`Add APP`, async () => {
            const randomNum = Math.floor(Math.random() * 9000 + 10);
            appName = `App1` + randomNum;
            await cmHeaderSection.selectHeaderOption(`Apps`, `Add App`);
            await cmAddAPP.createAPP(appName);
            await expect(await cmAPPDetailsPage.getAppName()).toBe(appName);
            appId = await cmAPPDetailsPage.getAppId();
        });

        await test.step(`Create Contract`, async () => {
            await cmHeaderSection.selectHeaderOption(`APIs`, `All APIs`);  
            await cmSearchObjectPage.searchObject(`APIs`, APIname);
            await cmApiOverviewPage.landToAPIAcessPage();
            await cmAPIAccessPage.connectApp(appName);
            await cmApiAppPage.activateContract();
        });
    });

    test(`Verify API Contract Details`,async({request,baseURL}) =>{
        //automation-GWPVq6VoWqpIV7OvjnzqWuhV8SIHb2PZBJXOrAxl
        const appId1 =  `GWPVq6VoWqpIV7OvjnzqWuhV8SIHb2PZBJXOrAxl.automation`; 
        const _response = await request.get(`${ENV.cmUrl}api/apps/versions/${appId1}/contracts`, {headers:{
            'Accept': `application/json`,
            'Content-Type' : `application/json`
        }});
        expect(await _response.ok()).toBeTruthy();
        expect(await _response.status()).toBe(200);
        const obj = await _response.json();
        const actual_api_name : string = await obj.channel.item[0].EntityReferences.EntityReference[1].Title;
        expect(await actual_api_name).toBe(`Swagger_Petstore1`);
      });
});
