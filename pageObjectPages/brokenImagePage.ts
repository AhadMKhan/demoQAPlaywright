import { expect } from "@playwright/test";

export class BrokenImagePage {
  
  private page;
  private brokenImageTab;

  constructor(page) {
    this.page = page;
    this.brokenImageTab = page.locator(`(//*[@id="item-6"]/span)[text()='Broken Links - Images']`)
  }

  async clickBrokenImageTab() {
    await this.brokenImageTab.click()
  }

  async assertBrokenImage() {
    await this.page.waitForSelector('.col-12 img[src*="Toolsqa_1.jpg"]');
    const secondImage = await this.page.$('.col-12 img[src*="Toolsqa_1.jpg"]');
    const isBroken = await secondImage.evaluate((img) => img.naturalWidth === 0);
    expect(isBroken).toBe(true);
  
  }
}
