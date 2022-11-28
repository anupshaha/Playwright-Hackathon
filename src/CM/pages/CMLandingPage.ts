import { Locator, Page } from "@playwright/test";


export default class CMLandingPage {

    private page: Page;
    private newsFeedTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newsFeedTitle = page.locator(`div.ResourceTitle h1`);
    }

    public async titleText(){
        await this.newsFeedTitle.waitFor();
        return await this.newsFeedTitle.innerText();
    }


}