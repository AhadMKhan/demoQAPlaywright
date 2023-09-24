const Base = require("@playwright/test")
import { HomePage } from '../pageObjectPages/homePage';
import { WebTablePage } from '../pageObjectPages/webTablePage';
import { BrokenImagePage } from '../pageObjectPages/brokenImagePage';
import { FormsPage } from '../pageObjectPages/formsPage';
import { ProgressBarPage } from '../pageObjectPages/progressBarPage';
import { ToolTipPage } from '../pageObjectPages/tootlTipPage';
import { DragandDropPage } from '../pageObjectPages/dragAndDrop';

exports.test = Base.test.extend({
    homePage: async ({ page }, use) => {
        await use ( new HomePage(page))
    },
    webTablePage: async ({ page }, use) => {
        await use ( new WebTablePage(page))
    },
    brokenImagePage: async ({ page }, use) => {
        await use ( new BrokenImagePage(page))
    },
    formsPage: async ({ page }, use) => {
        await use ( new FormsPage(page))
    },
    progressBarPage: async ({ page }, use) => {
        await use ( new ProgressBarPage(page))
    },
    toolTipPage: async ({ page }, use) => {
        await use ( new ToolTipPage(page))
    },
    dragAndDropPage: async ({ page }, use) => {
        await use ( new DragandDropPage(page))
    }
})

exports.expect = Base.expect
exports.request = Base.request