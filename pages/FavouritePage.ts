import { Page, Locator, expect } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class FavouritePage extends CommonPage {
  constructor(page: Page) {
    super(page);
  }

  async addEntityToFavourites(entityType: string, entityName: string) {
    await this.navigateToPage(entityType);
    if (entityType === "Dashboards") {
      await this.addDashboardToFavourites(entityName);
    } else if (entityType === "Reports") {
      await this.addReportToFavourites(entityName);
    } else if(entityType === "Ad Hoc Reports"){
      await this.addAdHocReportToFavourites(entityName);
    }
  }

  private async addDashboardToFavourites(entityName: string) {
    const card = this.page.locator('[data-testid="card-with-image-box"]', {
      has: this.page.locator('[data-testid="card-with-image-card-name"]', {
        hasText: entityName,
      }),
    });
    await card.locator('[data-testid="not-selected-star-icon"]').click();
  }

  private async addReportToFavourites(entityName: string) {
    // Add your custom logic for Reports here
    const row = await this.page.locator('[data-testid="table-row"]', {
      has: this.page.locator(`text=${entityName}`),
    });
    await row.locator("svg").first().click();
  }

    private async addAdHocReportToFavourites(entityName: string) {
    // Add your custom logic for Ad Hoc Reports here
    const row = await this.page.locator('[data-testid="table-row"]', {
      has: this.page.locator(`text=${entityName}`),
    });
    await row.locator('[data-testid="not-selected-star-icon"]').click();
  }

  async isEntityInFavourites(entityType: string, entityName: string) {
    if (entityType === "Dashboards") {
      await expect(
        this.page.locator('[data-testid="card-with-image-box"]', {
          has: this.page.locator('[data-testid="card-with-image-card-name"]', {
            hasText: entityName,
          }),
        })
      ).toBeVisible();
    } else if (entityType === "Reports") {
      await expect(
        this.page.locator("p.MuiTypography-root", {
          hasText: entityName,
        })
      ).toBeVisible();
    }
  }

  async assertEntityInFavourites(entityType: string, entityName: string) {
    await this.goToTab(entityType);
    await this.isEntityInFavourites(entityType, entityName);
  }

  async removeEntityFromFavourites(entityType: string, entityName: string) {
    await this.goToTab(entityType);
    if (entityType === "Dashboards") {
      // Locate the card by its label text
      const card = this.page.locator('[data-testid="card-with-image-box"]', {
        has: this.page.getByText("Attrition Analysis", { exact: true }),
      });
      await card.locator('[data-testid="selected-star-icon"]').click();
      await card
        .locator('[data-testid="selected-star-icon"]')
        .waitFor({ state: "detached" });
    } else {
      const card = this.page.locator('[data-testid="card-without-image-box"]', {
        has: this.page.getByText(`${entityName}`, {
          exact: true,
        }),
      });
      await card.locator('[data-testid="selected-star-icon"]').click();
      await card
        .locator('[data-testid="selected-star-icon"]')
        .waitFor({ state: "detached" });
    }
  }
}
