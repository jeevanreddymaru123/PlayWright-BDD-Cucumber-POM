import { Page, expect } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RecentPage extends CommonPage {
  constructor(page: Page) {
    super(page);
  }

  async accessEntity(entityType: string, entityName: string) {
    await this.navigateToPage(entityType);
    if (entityType === "Dashboards") {
      await this.accessDashboard(entityName);
    } else if (entityType === "Reports") {
      await this.accessReport(entityName);
    }
  }

  private async accessDashboard(entityName: string) {
    const card = this.page.locator('[data-testid="card-with-image-box"]', {
      has: this.page.locator('[data-testid="card-with-image-card-name"]', {
        hasText: entityName,
      }),
    });
    await card.click();
  }

  private async accessReport(entityName: string) {
    const row = this.page.locator('[data-testid="table-row"]', {
      has: this.page.locator(`text=${entityName}`),
    });
    await row.click();
  }

  async isEntityInRecent(entityType: string, entityName: string) {
    const row = this.page
      .locator('[data-testid="table-row"]')
      .filter({
        has: this.page.locator('[data-testid="table-row-cell"]', {
          hasText: entityType,
        }),
      })
      .filter({
        has: this.page.locator('[data-testid="table-row-cell"]', {
          hasText: entityName,
        }),
      });

    await expect(row).toBeVisible();
  }

  async assertEntityInRecent(entityType: string, entityName: string) {
    await this.isEntityInRecent(entityType, entityName);
  }
}
