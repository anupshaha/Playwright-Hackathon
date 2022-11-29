/* This class is created to perform action on API APP page.*/
import { Locator, Page } from "@playwright/test";

export default class CM_API_APPPage{
    private page : Page;
    private apps : Locator;
    private connection_access : Locator;
    private activate : Locator;
    private confirm : Locator;

    constructor(page: Page) {
        this.page = page;
        this.apps = page.getByRole('link', { name: ' Apps' });
        this.connection_access = page.getByRole('button', { name: ' Connection Actions' });
        this.activate = page.getByRole('menuitem', { name: 'Activate' });
        this.confirm = page.getByRole('button', { name: 'Confirm' });
    }

    public async activateContract(){
        // for now, this method activate one contract at a time and assume that there is request from one app only.
       await this.apps.click();
       await this.connection_access.click();
       await this.activate.click();
       await this.confirm.click();
    }

}