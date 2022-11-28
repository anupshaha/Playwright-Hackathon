import { Page, Locator } from "@playwright/test";

export default class CM_API_DetailsPage {

    private page: Page;
    private leftMenu: Locator;
    private apiNameTxt: Locator;
    private editAPIBtn: Locator;
    private apiNameTxtBox: Locator;
    private saveBtn: Locator;
    private deleteAPIBtn: Locator;
    private deleteConfirmationBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.leftMenu = page.locator(`div#NestedMenu`);
        this.apiNameTxt = page.locator(`div#ResourceTitle h1`);
        this.editAPIBtn = page.getByRole(`link`, { name: `Edit` }).first();
        this.apiNameTxtBox = page.getByPlaceholder(`Enter Name`);
        this.saveBtn = page.getByRole(`button`, { name: `Save` });
        this.deleteAPIBtn = page.getByRole(`button`, { name: `Delete` });
        this.deleteConfirmationBtn = page.getByRole(`button`, { name: `OK` });
    }

    public async selectOptionFromMenu(menu: string) {
        await this.leftMenu.getByRole(`link`, { name: menu }).click();
    }

    public async getAPIName() {
        await this.apiNameTxt.waitFor();
        return await this.apiNameTxt.innerText();
    }

    public async editAPIDetails(apiName: string) {
        await this.editAPIBtn.click();
        await this.apiNameTxtBox.fill(apiName);
        await this.saveBtn.click();
    }

    public async deleteAPI() {
        await this.deleteAPIBtn.click();
        await this.deleteConfirmationBtn.click();
    }
}