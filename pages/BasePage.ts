import {Page, Locator} from '@playwright/test'

export class BasePage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

async navigate(url:string):Promise<void> {
    await this.page.goto(url)
}

async getTitile(): Promise<string> {
    return await this.page.title();
}
async waitForPageLoad(): Promise<void>{
    await this.page.waitForLoadState("networkidle")
}

async screenshot(name: string): Promise<void>{
    await this.page.screenshot({path:`screenshots/${name}`, fullPage:true})
}

async clickOnElement(locator: string): Promise<void> {
    await this.page.click(locator)

}

async fillInput(locator: string, text: string): Promise<void>{
    await this.page.fill(locator,text)
}
async getText(locator: string): Promise<string>{
    return await this.page.textContent(locator) || " "
}

async isVisible(locator: string): Promise<boolean> {
    return await this.page.isVisible(locator)

}

}