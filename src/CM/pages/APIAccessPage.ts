/* This class is created to perform action on API Access page.*/
import { Locator, Page } from "@playwright/test";

export default class APIAccessPage{
    private page : Page;
    private app_name_fill : Locator;
    private app_name_list : Locator;
    private next_button : Locator;
    private save_button : Locator;
    private target_live : Locator;
    private api_link : Locator;

    constructor(page: Page) {
        this.page = page;
        this.app_name_fill = page.getByPlaceholder('Search by app name (displays first 10 matches)');
        this.app_name_list = page.locator("//ul[contains(@id,'ui-id')]/li");
        this.next_button = page.getByRole('button', { name: 'Next' });
        this.save_button = page.getByRole('button', { name: 'Save' });
        this.target_live = page.locator('#Produsction');
        this.api_link = page.locator('.addapi_name>a');
    }

    public async connectApp(appName : string){
        await this.app_name_fill.fill(appName);
        await this.app_name_list.click();
        await this.next_button.click();
        await this.target_live.click();
        await this.next_button.click();
        await this.save_button.click();
        // landing to the api page again
        await this.api_link.click();
    }

}