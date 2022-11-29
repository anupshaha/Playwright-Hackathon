/* This class is created to perform action on API Overview page.*/
import { Locator, Page } from "@playwright/test";

export default class CMApiOverviewPage{
    private page : Page;
    private overview_link : Locator;
    private access_link : Locator;

    constructor(page: Page) {
        this.page = page;
        this.overview_link = page.getByRole('link', { name: ' Overview' });
        this.access_link = page.getByRole('link', { name: 'Access' });
    }

    public async landToAPIAcessPage(){
        await this.overview_link.click();
        await this.access_link.click();
    }

}