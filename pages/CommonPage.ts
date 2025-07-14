import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CommonPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Generic navigation method for any page by name
  async navigateToPage(pageName: string) {
    await this.page.click(`.MuiListItemText-primary:text-is("${pageName}")`);
  }

  // Robust method to go to a tab by its name using getByRole
  async goToTab(tabName: string) {
    await this.page.getByRole("tab", { name: tabName, exact: true }).click();
  }

  // Assert a message is visible on the page
  async assertMessage(message: string) {
    const errorMessage = this.page.locator(`//div[contains(text(),'${message}')]`);
    await errorMessage.waitFor({ state: "visible" });
    await expect(errorMessage).toContainText(message);
  }
}
