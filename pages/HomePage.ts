import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    readonly headerInfo: Locator
    readonly headerLogo: Locator

    constructor(page: Page){
       super(page)
       this.headerInfo = page.locator(`[data-testid ="arya-logo"]`)

    }

    async goto(): Promise<void>{
        await this.page.goto("/")
    }

    async getHeaderInfo(): Promise<string>{
        return await this.headerInfo.textContent() || ""
    }
}