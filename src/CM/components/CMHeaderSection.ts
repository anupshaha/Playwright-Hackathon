import { Locator, Page } from "@playwright/test";

export default class CMHeaderSection {

    private page: Page;
    private headerMenu: Locator;
    private headerMenuOptions: Locator;
    private subMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerMenu = page.getByRole(`menu`);
        this.headerMenuOptions = page.locator(`span`);
        this.subMenu = page.getByRole(`menuitem`);
    }

    public async selectHeaderOption(menuOption: string, subMenuOption?: string) {
        // await this.page.waitForLoadState(`domcontentloaded`);
        await this.headerMenuOptions.filter({ hasText: menuOption }).waitFor({state:`attached`});
        await this.headerMenuOptions.filter({ hasText: menuOption }).click();
        // await this.headerMenu.filter({hasText: menuOption}).click();
        if(subMenuOption){
            await this.subMenu.filter({ hasText: subMenuOption}).waitFor({state:`attached`});
            await this.subMenu.filter({ hasText: subMenuOption}).click();
        }
    }
    
  }

