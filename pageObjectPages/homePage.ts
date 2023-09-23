import { expect } from '@playwright/test';
export class HomePage {
    private page;
    private elementsBtn;
    private formsBtn;
    private widgetsBtn;
    private interactionsBtn

    
    constructor(page) {
        this.page = page
        this.elementsBtn = page.locator(`(//div[@class="card-body"]/h5)[text()='Elements']`)
        this.formsBtn = page.locator(`(//div[@class="card-body"]/h5)[text()='Forms']`)
        this.widgetsBtn = page.locator(`(//div[@class="card-body"]/h5)[text()='Widgets']`)
        this.interactionsBtn = page.locator(`(//div[@class="card-body"]/h5)[text()='Interactions']`)




    }

    //actions

    async navigateToWebsite (pageTitle) {
        await this.page.setViewportSize({width: 1920, height: 1080});
        await this.page.goto("/")
        await expect(this.page).toHaveTitle(pageTitle);
    }

    async clickElements (expectedUrl) {
        await this.elementsBtn.click()
        await expect(this.page.url()).toBe(expectedUrl)
    }

    async clickForms (expectedUrl) {
        await this.formsBtn.click()
        await expect(this.page.url()).toBe(expectedUrl)
    }

    async clickWidgets (expectedUrl) {
        await this.widgetsBtn.click()
        await expect(this.page.url()).toBe(expectedUrl)
    }

    async clickInteractions (expectedUrl) {
        await this.interactionsBtn.click()
        await expect(this.page.url()).toBe(expectedUrl)
    }
}