import { expect } from '@playwright/test';
export class ToolTipPage {
    private page;
    private toolTipTab;
    private toolTipButton;

    
    constructor(page) {
        this.page = page
        this.toolTipTab = page.locator(`(//*[@id="item-6"]/span)[text()='Tool Tips']`)
        this.toolTipButton = page.locator('id=toolTipButton')
    }

    //actions
    async clickToolTipsTab () {
        await this.toolTipTab.click()
    }

    async verifyHoverOverToolTipText(text) {
        await this.toolTipButton.hover();
       const tooltip = await this.page.waitForSelector('.tooltip-inner');
       expect(await tooltip.innerText()).toEqual(text)
      }
}