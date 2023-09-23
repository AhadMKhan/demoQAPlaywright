const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';


test.describe("Verifying the Images", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC02 - Verify broken image", async ({ homePage, brokenImagePage }) => {
      await homePage.clickElements(`${homePageData.elementsPageUrl}`)
      await brokenImagePage.clickBrokenImageTab()
      await brokenImagePage.assertBrokenImage()
    })

});

