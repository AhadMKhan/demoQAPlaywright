import { expect } from "@playwright/test";
import path from "path";

export class FormsPage {
  
  private page;
  private practiceFormTab;
  private firstNameInput;
  private lastNameInput;
  private emailInput;
  private genderRadioBtn;
  private mobileNumberInput;
  private dobInput;
  private yearDropDown;
  private monthDropDown;
  private daySelect;
  private subjectsInput;
  private hobbiesCheckbox;
  private uploadFileBtn;
  private currentAddressInput;
  private stateDropDown;
  private cityInput;
  private submitBtn;
  private thanksHeading;
  private modalCloseBtn;
  private secondColumnFirstRow;
  private secondColumnSecondRow;
  private secondColumnThirdRow;
  private secondColumnFourthRow;
  private secondColumnSixthRow;
  private secondColumnSeventhRow;
  private secondColumnEightRow;
  private secondColumnNinthRow;
  private secondColumnTenthRow;


  constructor(page) {
    this.page = page;
    this.practiceFormTab = page.locator(`(//*[@id="item-0"]/span)[text()='Practice Form']`)
    this.firstNameInput = page.locator("id=firstName");
    this.lastNameInput = page.locator("id=lastName");
    this.emailInput = page.locator("id=userEmail");
    this.mobileNumberInput = page.locator("id=userNumber");
    this.dobInput = page.locator("id=dateOfBirthInput");
    this.yearDropDown = page.locator('.react-datepicker__year-select');
    this.monthDropDown = page.locator('.react-datepicker__month-select');
    this.subjectsInput = page.locator("id=subjectsInput");
    this.uploadFileBtn = "id=uploadPicture";
    this.currentAddressInput = page.locator("id=currentAddress");
    this.stateDropDown = page.locator("id=state");
    this.cityInput = page.locator("id=city");
    this.submitBtn = page.locator("id=submit");
    this.thanksHeading = page.locator("id=example-modal-sizes-title-lg");
    this.modalCloseBtn = page.locator("id=closeLargeModal")
    this.secondColumnFirstRow = page.locator(`(//td)[2]`)
    this.secondColumnSecondRow = page.locator(`(//td)[4]`)
    this.secondColumnThirdRow = page.locator(`(//td)[6]`)
    this.secondColumnFourthRow = page.locator(`(//td)[8]`)
    this.secondColumnSixthRow = page.locator(`(//td)[12]`)
    this.secondColumnSeventhRow = page.locator(`(//td)[14]`)
    this.secondColumnEightRow = page.locator(`(//td)[16]`)
    this.secondColumnNinthRow = page.locator(`(//td)[18]`)
    this.secondColumnTenthRow = page.locator(`(//td)[20]`)

  }

  async clickPracticeFormTab() {
    await this.practiceFormTab.click()
  }

  async enterPracticeForm(firstName, lastName, email,gender,mobileNmbr, dob, subject, hobby,filePath,currentAddress,state,city) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.selectGender(gender);
    await this.mobileNumberInput.fill(mobileNmbr);
    await this.selectDOB(dob);
    await this.subjectSelect(subject);
    await this.hobbySelect(hobby);
    await this.uploadImageFile(filePath);
    await this.currentAddressInput.fill(currentAddress);
    await this.stateSelect(state);
    await this.citySelect(city);
    await this.currentAddressInput.click();
  }

  async clickSubmitButton() {
     this.submitBtn.click();
     await this.page.waitForTimeout(5000)
  }

  async selectDOB (dob) {
    const dateGet = dob
    const dateParts = dateGet.split(' '); // Split the string by space

    const day = dateParts[0]; // "15"
    const month = dateParts[1]; // "January"
    const year = dateParts[2]; // "1990"

    await this.dobInput.click()
    await this.yearDropDown.selectOption({ label: year });
    await this.monthDropDown.selectOption({ label: month });
    this.daySelect = await this.page.locator('.react-datepicker__day--0'+day)
    await this.daySelect.click()
  }

  async subjectSelect(subject) {
    await this.subjectsInput.fill(subject);
    await this.subjectsInput.press('Enter');
  }

  async selectGender(gender) {
    this.genderRadioBtn = this.page.locator(`(//label[@class="custom-control-label"])[text()='`+gender+`']`)
    await this.genderRadioBtn.click()
  }

  async hobbySelect(hobby) {
    this.hobbiesCheckbox = await this.page.locator(`//div[@class="custom-control custom-checkbox custom-control-inline"]/label[text()='`+hobby+`']`);
    await this.hobbiesCheckbox.click()
  }

  async uploadImageFile(filePath){
    await this.page.waitForTimeout(10000)
    await this.page.setInputFiles(this.uploadFileBtn, filePath)
    await this.page.waitForTimeout(10000)
  }

  async stateSelect(state) {
    await this.stateDropDown.click()
    await this.stateDropDown.type(state)
    await this.stateDropDown.press('Enter')
  }

  async citySelect(city) {
    await this.cityInput.click()
    await this.cityInput.type(city)
    await this.cityInput.press('Enter')
  }

  async assertFormSubmission(thanksHeadingExpected,firstName, lastName, email,gender, mobileNmbr, subject, hobby,filePath,currentAddress,state,city){
    const file_name = filePath.split("\\").pop();
    await expect(this.thanksHeading).toHaveText(thanksHeadingExpected)
    await expect(this.secondColumnFirstRow).toHaveText(firstName+" "+lastName)
    await expect(this.secondColumnSecondRow).toHaveText(email)
    await expect(this.secondColumnThirdRow).toHaveText(gender)
    await expect(this.secondColumnFourthRow).toHaveText(mobileNmbr)
    await expect(this.secondColumnSixthRow).toHaveText(subject)
    await expect(this.secondColumnSeventhRow).toHaveText(hobby)
    await expect(this.secondColumnEightRow).toHaveText(file_name)
    await expect(this.secondColumnNinthRow).toHaveText(currentAddress)
    await expect(this.secondColumnTenthRow).toHaveText(state+" "+city)
    await this.modalCloseBtn.click()
  }
}