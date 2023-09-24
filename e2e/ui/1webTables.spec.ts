const { test, expect, request } = require("../../fixtures/base")

import * as homePageData from '../../data/homePageData.json';
import * as userData from '../../data/userData.json';

test.describe("Web Table Adding and Editing Data", () => {
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

});

