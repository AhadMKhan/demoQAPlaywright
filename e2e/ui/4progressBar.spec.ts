const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';

test.describe("Web Table Adding and Editing Data", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC04 - Verify the progress bar", async ({ homePage, progressBarPage }) => {
      await homePage.clickWidgets(`${homePageData.widgetsPageUrl}`)
      await progressBarPage.clickProgressBarTab()
      await progressBarPage.clickStart()
      await progressBarPage.assertProgressBar()
    })
});

