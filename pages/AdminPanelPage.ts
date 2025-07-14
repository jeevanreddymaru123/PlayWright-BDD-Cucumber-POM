import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { BASE_URL } from "../testData/UserData";
import { faker } from "@faker-js/faker";

class AdminPanelPage extends BasePage {
  //Defining class selectors
  readonly page: Page;
  readonly AdminPanelSection: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly languageDropdown: Locator;
  readonly languageOptions: Locator;
  readonly saveButton: Locator;

  //Init selectors using constructor
  constructor(page: Page) {
    super(page);
    this.page = page;

    // Tab locators
    this.AdminPanelSection = page.getByRole("tab", { name: "Users", exact: true });

    // User creation locators
    this.fullNameInput = page.locator('input[name="Name"]');
    this.emailInput = page.locator('input[name="Email"]');
    this.phoneInput = page.locator('input[name="Phone"]');
    this.languageDropdown = page.locator('.MuiSelect-select').first();
    this.languageOptions = page.locator('[role="option"]');
    this.saveButton = page.getByTestId("save-drawer-btn");
  }

  async selectLanguage(language: string) {
    await this.languageDropdown.click();
    await this.page
      .getByRole("option", {
        name: language,
        exact: true,
      })
      .click();
  }

  async createNewAdmin(userData: {
    fullName: string;
    email: string;
    phone: string;
    language: string;
  }) {
    const createAdminButton = this.page.getByRole('button', { name: "Create admin", exact: true });

    await createAdminButton.click();

    await this.fullNameInput.fill(userData.fullName);
    await this.emailInput.fill(userData.email);
    await this.phoneInput.fill(userData.phone);

    await this.selectLanguage(userData.language);

    await this.saveButton.click();
  }

  async createTestAdmin() {
    const tempUser= faker.person.firstName(); 
    await this.createNewAdmin({
      fullName: "Temp admin " + tempUser,
      email: `${tempUser}@abcfitness.com`,
      phone: "1234567899",
      language: "English (English)",
    });
  }

  async selectSection(sectionName: string){
     const sectionButton = this.page.getByRole('button', { name: sectionName, exact: true });

     await sectionButton.click();
  }

  async searchForTestAdmin(){
    await this.page.getByTestId('search-input').fill('Temp admin');
  }
}

export default AdminPanelPage;
