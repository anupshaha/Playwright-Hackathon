import { Locator, Page } from "@playwright/test";




export default class CMAddAPP {

    private appName: Locator;
    private page :  Page;
    private appVersion: Locator;
    private finishBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.appName= page.getByPlaceholder(`Enter Name`);
        this.appVersion= page.getByPlaceholder(`Enter App Version`);
        this.finishBtn= page.getByRole(`button`, { name: `Finish` });
    }

    public async createAPP(AppName){
        await this.appName.fill(AppName);
        await this.appVersion.fill(`v1`);
        await this.finishBtn.click();
    }
}
