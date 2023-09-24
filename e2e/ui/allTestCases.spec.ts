const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';
import * as userData from '../../data/userData.json';
import * as toolTipData from '../../data/toolTipData.json';
import * as dragAndDropData from '../../data/dragAndDropData.json';

test.describe("Demo QA UI Testing", () => {
  test.beforeEach(async ({ homePage }) => {
  await homePage.navigateToWebsite(`${homePageData.pageTitle}`)

  });

    test("TC01- Scenario A - Verify user can enter new data into the table", async ({ homePage, webTablePage }) => {
      await homePage.clickElements(`${homePageData.elementsPageUrl}`)
      await webTablePage.clickWebTableTab()
      await webTablePage.clickAddButton()
      await webTablePage.enterRegistrationFormDetails(`${userData.firstName}`, `${userData.lastName}`, `${userData.email}`, `${userData.age}`, `${userData.salary}`, `${userData.department}`)
      await webTablePage.clickSubmitBtn()
    })

    test("TC01- Scenario B - Verify user can edit the row in a table", async ({ homePage, webTablePage }) => {
      await homePage.clickElements(`${homePageData.elementsPageUrl}`)
      await webTablePage.clickWebTableTab()
      await webTablePage.clickAddButton()
      await webTablePage.enterRegistrationFormDetails(`${userData.firstName}`, `${userData.lastName}`, `${userData.email}`, `${userData.age}`, `${userData.salary}`, `${userData.department}`)
      await webTablePage.clickSubmitBtn()
      await webTablePage.searchUser(`${userData.email}`)
      await webTablePage.assertingUserVisibleInTable(`${userData.email}`, 4)
      await webTablePage.clickEditIcon()
      await webTablePage.editUserDetails(`${userData.Gerimedica}`, `${userData.BV}`)
      await webTablePage.clickSubmitBtn()
      await webTablePage.searchUser(`${userData.Gerimedica}`)
      await webTablePage.assertingUserVisibleInTable(`${userData.Gerimedica}`, 1)
      await webTablePage.assertingUserVisibleInTable(`${userData.BV}`, 2)
    })

    test("TC02 - Verify broken image", async ({ homePage, brokenImagePage }) => {
      await homePage.clickElements(`${homePageData.elementsPageUrl}`)
      await brokenImagePage.clickBrokenImageTab()
      await brokenImagePage.assertBrokenImage()
    })

    test("TC03 - Verify user can submit the form.", async ({ homePage, formsPage }) => {
      await homePage.clickForms(`${homePageData.formsPageUrl}`)
      await formsPage.clickPracticeFormTab()
      await formsPage.enterPracticeForm(`${userData.Gerimedica}`, `${userData.BV}`, `${userData.email}`,`${userData.male}`, `${userData.mobileNumber}`,`${userData.dateofBirth}`, `${userData.subject}`, `${userData.hobby}`, `${userData.imageFilePath}`,`${userData.currentAddress}`,`${userData.state}`,`${userData.city}`)
      await formsPage.clickSubmitButton()
      await formsPage.assertFormSubmission(`${userData.formSubmissionHeading}`, `${userData.Gerimedica}`, `${userData.BV}`, `${userData.email}`, `${userData.male}`, `${userData.mobileNumber}`, `${userData.subject}`, `${userData.hobby}`, `${userData.imageFilePath}`, `${userData.currentAddress}`, `${userData.state}`,`${userData.city}`)
    })

    test("TC04 - Verify the progress bar", async ({ homePage, progressBarPage }) => {
      await homePage.clickWidgets(`${homePageData.widgetsPageUrl}`)
      await progressBarPage.clickProgressBarTab()
      await progressBarPage.clickStart()
      await progressBarPage.assertProgressBar()
    })

    test("TC05 - Verify the tooltip", async ({ homePage, toolTipPage }) => {
      await homePage.clickWidgets(`${homePageData.widgetsPageUrl}`)
      await toolTipPage.clickToolTipsTab()
      await toolTipPage.verifyHoverOverToolTipText(`${toolTipData.hoverText}`)
    })

    test("TC06 - Verify user can drag and drop", async ({ homePage, dragAndDropPage }) => {
      await homePage.clickInteractions(`${homePageData.interactionsPageUrl}`)
      await dragAndDropPage.clickDroppableTab()
      await dragAndDropPage.performDragAndDrop()
      await dragAndDropPage.assertDroppedText(`${dragAndDropData.droppedText}`)
    })
});

