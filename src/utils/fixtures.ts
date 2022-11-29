import { test as baseTest } from '@playwright/test';
// import { expect } from '@playwright/test';
import HeaderSection from '@PMcomponents/HeaderSection';
import LoginPage from '@PMpages/LoginPage';
import SecurityPage from '@PMpages/SecurityPage';
import WorkbenchPage from '@PMpages/WorkbenchPage';
import CMLoginPage from '@CMpages/CMLoginPage';
import CMHeaderSection from '@CMcomponents/CMHeaderSection';
import CMAddAPI from '@CMpages/CMAddAPI';
import CMLandingPage from '@CMpages/CMLandingPage';
import CMAddAPP from '@CMpages/CMAddAPP';
import CM_API_DetailsPage from '@CMpages/CM_API_DetailsPage';
import CM_API_APPPage from '@CMpages/CM_API_APPPage';
import CMApiOverviewPage from '@CMpages/CMApiOverviewPage';
import CMSearchObjectPage from '@CMpages/CMSearchObjectPage';
import CM_APIAccessPage from '@CMpages/CM_APIAccessPage';
import CM_APP_DetailsPage from '@CMpages/CM_APP_DetailsPage';
// import ENV from '@utils/ENV';
// import * as fs from 'fs';
// import * as path from 'path';


const test = baseTest.extend<{
    newCMPortal: CMLoginPage;
    loginPage: LoginPage;
    workbenchPage: WorkbenchPage;
    headerSection: HeaderSection;
    securityPage: SecurityPage;
    cmLoginPage: CMLoginPage;
    cmHeaderSection: CMHeaderSection;
    cmAddAPI: CMAddAPI;
    cmLandingPage: CMLandingPage;
    cmAddAPP: CMAddAPP;
    cmAPIDetailsPage: CM_API_DetailsPage;
    cmAPIAccessPage : CM_APIAccessPage;
    cmApiOverviewPage: CMApiOverviewPage;
    cmSearchObjectPage : CMSearchObjectPage;
    cmApiAppPage : CM_API_APPPage;
    cmAPPDetailsPage: CM_APP_DetailsPage;
}>({
    newCMPortal: async ({ context }, use) => {
        await use(new CMLoginPage(await context.newPage()));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    workbenchPage: async ({ page }, use) => {
        await use(new WorkbenchPage(page));
    },
    headerSection: async ({ page }, use) => {
        await use(new HeaderSection(page));
    },
    securityPage: async ({ page }, use) => {
        await use(new SecurityPage(page));
    },
    cmLoginPage: async ({ page }, use) => {
        await use(new CMLoginPage(page));
    },
    cmHeaderSection: async ({ page }, use) => {
        await use(new CMHeaderSection(page));
    },
    cmAddAPI: async ({ page }, use) => {
        await use(new CMAddAPI(page));
    },
    cmLandingPage: async ({ page }, use) => {
        await use(new CMLandingPage(page));
    },
    cmAPIDetailsPage: async ({ page }, use) => {
        await use(new CM_API_DetailsPage(page));
    },
    cmAddAPP: async ({ page }, use) => {
        await use(new CMAddAPP(page));
    },
    cmAPIAccessPage: async ({ page }, use) => {
        await use(new CM_APIAccessPage(page));
    },
    cmApiOverviewPage: async ({ page }, use) => {
        await use(new CMApiOverviewPage(page));
    },
    cmSearchObjectPage: async ({ page }, use) => {
        await use(new CMSearchObjectPage(page));
    },
    cmApiAppPage: async ({ page }, use) => {
        await use(new CM_API_APPPage(page));
    },
    cmAPPDetailsPage: async ({ page }, use) => {
        await use(new CM_APP_DetailsPage(page));
    },
    // storageState: async ({ browser }, use, testInfo) => {
    //     const fileName = path.join(testInfo.project.outputDir, 'storage-' + testInfo.workerIndex);
    //     if (!fs.existsSync(fileName)) {
    //         const page = await browser.newPage({ storageState: undefined });
    //         const cmLoginPage = new CMLoginPage(page);
    //         const cmLandingPage = new CMLandingPage(page);
    //         await cmLoginPage.visit(ENV.cmUrl + `atmosphere/`);
    //         await cmLoginPage.login({ username: ENV.cmAdminUser, password: ENV.cmAdminPassword });
    //         expect(await cmLandingPage.titleText()).toBe(`Action Dashboard`);
    //         await page.context().storageState({ path: fileName });
    //         await page.close();
    //     }
    //     console.log(fileName);
    //     await use(fileName);
    // }
});

export default test;
export { expect } from '@playwright/test';
