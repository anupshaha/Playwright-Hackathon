import { test as baseTest } from '@playwright/test';

import HeaderSection from '@PMcomponents/HeaderSection';
import LoginPage from '@PMpages/LoginPage';
import SecurityPage from '@PMpages/SecurityPage';
import WorkbenchPage from '@PMpages/WorkbenchPage';
import CMLoginPage from '@CMpages/CMLoginPage';
import CMHeaderSection from '@CMcomponents/CMHeaderSection';
import CMAddAPI from '@CMpages/CMAddAPI';
import CMLandingPage from '@CMpages/CMLandingPage';
import CM_API_DetailsPage from '@CMpages/CM_API_DetailsPage';

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
    cmAPIDetailsPage: CM_API_DetailsPage;
}>({
    newCMPortal: async ({ context }, use) => {
        await use(new CMLoginPage((await context.newPage())));
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
<<<<<<< HEAD
    }

=======
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
<<<<<<< HEAD
>>>>>>> e17109430e0af2b38ce099545535799b8bbff951
=======
    cmAPIDetailsPage: async ({ page }, use) => {
        await use(new CM_API_DetailsPage(page));
    },
>>>>>>> 240dafb70ed01f57105b16af7ea87b46558fccd3
});

export default test;
export const expect = test.expect;
