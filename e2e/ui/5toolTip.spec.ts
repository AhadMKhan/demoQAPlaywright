const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';
import * as toolTipData from '../../data/toolTipData.json';

test.describe("Tooltip text cheecking", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC05 - Verify the tooltip", async ({ homePage, toolTipPage }) => {
      await homePage.clickWidgets(`${homePageData.widgetsPageUrl}`)
      await toolTipPage.clickToolTipsTab()
      await toolTipPage.verifyHoverOverToolTipText(`${toolTipData.hoverText}`)
    })
});

