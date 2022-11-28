import { test as baseTest } from '@playwright/test';
import HeaderSection from '@PMcomponents/HeaderSection';
import LoginPage from '@PMpages/LoginPage';
import SecurityPage from '@PMpages/SecurityPage';
import WorkbenchPage from '@PMpages/WorkbenchPage';
import CMLoginPage from '@CMpages/CMLoginPage';
import CMHeaderSection from '@CMcomponents/CMHeaderSection';
import CMAddAPI from '@CMpages/CMAddAPI';
import CMLandingPage from '@CMpages/CMLandingPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    workbenchPage: WorkbenchPage;
    headerSection: HeaderSection;
    securityPage: SecurityPage;
    cmLoginPage: CMLoginPage;
    cmHeaderSection: CMHeaderSection;
    cmAddAPI: CMAddAPI;
    cmLandingPage: CMLandingPage;
}>({
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
>>>>>>> e17109430e0af2b38ce099545535799b8bbff951
});

export default test;
export const expect = test.expect;
