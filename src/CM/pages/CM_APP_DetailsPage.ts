import { Locator, Page } from "@playwright/test";

export default class CM_APP_DetailsPage {

    private page: Page;
    private appIdTxt: Locator;
    private appNameTxt: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.appIdTxt = page.locator('#apidetails_appid');
        this.appNameTxt = page.locator('div#ResourceTitle h1');
    }

    public async getAppId(){
        await this.appIdTxt.waitFor();
        return await this.appIdTxt.innerText();
    }

    public async getAppName(){
        await this.appNameTxt.waitFor();
        return await this.appNameTxt.innerText();
    }

}