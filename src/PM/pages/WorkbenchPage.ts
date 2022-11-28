import { FrameLocator, Page } from "@playwright/test";

export default class WorkbenchPage{

    private topFrame: FrameLocator;
    private leftFrame : FrameLocator;
    readonly page: Page;

    constructor(page:  Page){
        this.page = page;
        this.topFrame= this.page.frameLocator(`#content`);
        this.leftFrame= this.topFrame.frameLocator(`#treePanel`);
    }

    public async getLeftFrameText(){
        const treeHeader = await this.leftFrame.locator(`#treeLabel`);
        return await treeHeader.innerText();
    }



}