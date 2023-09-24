const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';
import * as dragAndDropData from '../../data/dragAndDropData.json';

test.describe("Dragging and Dropping", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC06 - Verify user can drag and drop", async ({ homePage, dragAndDropPage }) => {
      await homePage.clickInteractions(`${homePageData.interactionsPageUrl}`)
      await dragAndDropPage.clickDroppableTab()
      await dragAndDropPage.performDragAndDrop()
      await dragAndDropPage.assertDroppedText(`${dragAndDropData.droppedText}`)
    })

});

