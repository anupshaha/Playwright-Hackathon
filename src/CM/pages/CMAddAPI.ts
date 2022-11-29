import { Locator, Page } from "@playwright/test";

export default class CM_Add_API {

    private importDLRadio: Locator;
    private page: Page;
    private importURL: Locator;
    private urlRadio: Locator;
    private fileRadio: Locator;
    private saveBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.importDLRadio = page.getByLabel(`I have an OAS3/Swagger/RAML/WSDL/WADL/GraphQL document`);
        this.importURL = page.getByPlaceholder(`Enter a URL`);
        this.urlRadio = page.getByRole(`radio`, { name: `URL` });
        this.fileRadio = page.getByLabel(`File (individual or ZIP)`);
        this.saveBtn = page.getByRole(`button`, { name: `Save` });
    }

    public async createAPIusingDocument(creationMethod: string) {
        await this.importDLRadio.check();
        if (creationMethod === `URL`) {
            await this.urlRadio.check();
            await this.importURL.fill(`https://petstore.swagger.io/v2/swagger.json`);
        }
        else {
            await this.fileRadio.check();
        }
        await this.saveBtn.click();
    }
}
