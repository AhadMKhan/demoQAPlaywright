const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';
import * as userData from '../../data/userData.json';


test.describe("Singup Form", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC03 - Verify user can submit the form.", async ({ homePage, formsPage }) => {
      await homePage.clickForms(`${homePageData.formsPageUrl}`)
      await formsPage.clickPracticeFormTab()
      await formsPage.enterPracticeForm(`${userData.Gerimedica}`, `${userData.BV}`, `${userData.email}`,`${userData.male}`, `${userData.mobileNumber}`,`${userData.dateofBirth}`, `${userData.subject}`, `${userData.hobby}`, `${userData.imageFilePath}`,`${userData.currentAddress}`,`${userData.state}`,`${userData.city}`)
      await formsPage.clickSubmitButton()
      await formsPage.assertFormSubmission(`${userData.formSubmissionHeading}`, `${userData.Gerimedica}`, `${userData.BV}`, `${userData.email}`, `${userData.male}`, `${userData.mobileNumber}`, `${userData.subject}`, `${userData.hobby}`, `${userData.imageFilePath}`, `${userData.currentAddress}`, `${userData.state}`,`${userData.city}`)
    })
});

