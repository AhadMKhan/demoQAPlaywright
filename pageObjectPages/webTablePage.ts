import { expect } from "@playwright/test";

export class WebTablePage {
  
  private page;
  private webTableTab;
  private addButton;
  private firstNameInput;
  private lastNameInput;
  private emailInput;
  private ageInput;
  private salaryInput;
  private departmentInput;
  private submitBtn;
  private editIcon;
  private searchBoxInput;
  private firstRowFourthColumn;

  constructor(page) {
    this.page = page;
    this.webTableTab = page.locator(`(//*[@id="item-3"]/span)[text()='Web Tables']`)
    this.addButton = page.locator("id=addNewRecordButton");
    this.firstNameInput = page.locator("id=firstName");
    this.lastNameInput = page.locator("id=lastName");
    this.emailInput = page.locator("id=userEmail");
    this.ageInput = page.locator("id=age");
    this.salaryInput = page.locator("id=salary");
    this.departmentInput = page.locator("id=department");
    this.submitBtn = page.locator("id=submit");
    this.editIcon = page.locator(`[title="Edit"]`);
    this.searchBoxInput = page.locator("id=searchBox")
    this.firstRowFourthColumn = page.locator(`(//div[@class="rt-td"])[`+4+`]`)
  }

  async clickWebTableTab() {
    await this.webTableTab.click()
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async clickEditIcon() {
    await this.editIcon.click();
  }

  async enterRegistrationFormDetails(firstName, lastName, email, age, salary, department) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.ageInput.fill(age);
    await this.salaryInput.fill(salary);
    await this.departmentInput.fill(department);
  }

  async editUserDetails(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }

  async searchUser(searchQuery: string) {
    await this.searchBoxInput.fill(searchQuery)
  }

  async assertingUserVisibleInTable(assertKeyword: string, tableColumn: number) {
    await expect(this.page.locator(`(//div[@class="rt-td"])[`+tableColumn+`]`))
    .toHaveText(assertKeyword);
  }
}
