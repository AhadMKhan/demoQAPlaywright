import { expect } from "@playwright/test";

export class DragandDropPage {
  
  private page;
  private droppableTab;
  private dragElement;
  private droppElement;

  constructor(page) {
    this.page = page;
    this.droppableTab = page.locator(`(//*[@id="item-3"]/span)[text()='Droppable']`)
    this.dragElement = page.locator('id=draggable')
    this.droppElement = page.getByLabel('Simple').locator('#droppable')
  }

  async clickDroppableTab() {
    await this.droppableTab.click()
  }

  async performDragAndDrop() {
    await this.dragElement.hover();
    await this.page.mouse.down();
    await this.droppElement.hover();
    await this.page.mouse.up();
    }

    async assertDroppedText(droppedText) {
      await expect(this.droppElement).toContainText(droppedText); 
    }

}
