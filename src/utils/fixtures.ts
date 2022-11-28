import { test as baseTest } from '@playwright/test';
import HeaderSection from '@PMcomponents/HeaderSection';
import LoginPage from '@PMpages/LoginPage';
import { SecurityPage } from '@PMpages/SecurityPage';
import WorkbenchPage from '@PMpages/WorkbenchPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    workbenchPage: WorkbenchPage;
    headerSection : HeaderSection;
    securityPage : SecurityPage;
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
    }

});

export default test;
