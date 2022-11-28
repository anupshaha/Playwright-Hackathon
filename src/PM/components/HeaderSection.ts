import { FrameLocator, Locator, Page } from "@playwright/test";

export default class HeaderSection {

    private page: Page;
    private headerframe: FrameLocator;
    private mainframe: FrameLocator;
    private logoutLink : Locator;



    constructor(page: Page) {
        this.page = page;
        this.mainframe = page.frameLocator(`frame[name="content"]`);
        this.headerframe = page.frameLocator(`frame[name="header"]`);
        this.logoutLink = this.headerframe.getByRole(`link`, { name: `Logout` });
    }

    public async selectHeaderOption(headerOption: string, subHeader?:string){
        await this.page.waitForLoadState(`domcontentloaded`);
        await this.headerframe.getByRole(`link`, { name: headerOption }).waitFor({state:`visible`});
        await this.headerframe.getByRole(`link`, { name: headerOption }).click();
        if(subHeader){
            await this.selectSubHeader(subHeader);
        }
    }

    private async selectSubHeader(subHeader:string){
        await this.mainframe.getByRole(`link`, { name: subHeader }).waitFor({state:`visible`});
        await this.mainframe.getByRole(`link`, { name: subHeader }).click();       
}

    public async logout(){
        await this.logoutLink.click();
    }
}

