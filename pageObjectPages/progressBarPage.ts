import { expect } from '@playwright/test';
export class ProgressBarPage {
    private page;
    private progressBarTab;
    private startBtn;

    
    constructor(page) {
        this.page = page
        this.progressBarTab = page.locator(`(//*[@id="item-4"]/span)[text()='Progress Bar']`)
        this.startBtn = page.locator('id=startStopButton')

    }

    //actions
    async clickProgressBarTab () {
        await this.progressBarTab.click()
    }

    async clickStart() {
        await this.startBtn.click()
    }

    async assertProgressBar () {
        const progressBar = await this.page.waitForSelector('.progress-bar', { state: 'visible' });
        await this.page.waitForTimeout(10000)
        expect(await progressBar.textContent()).toContain('100%');      
    }
}