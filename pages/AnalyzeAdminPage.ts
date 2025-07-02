import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AnalyzeAdminPage extends BasePage{
  readonly page: Page;
  readonly leftMenuItems: Locator;
  readonly analyzeTab: Locator;
  readonly analyzeTabItems: Locator;
  readonly customizeTab: Locator;
  readonly customizeTabItems: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.leftMenuItems = page.locator('[data-testid^="side-bar-"][data-testid$="-menu-btn"]');
    this.analyzeTab = page.locator('button:has-text("analyze")');
    this.analyzeTabItems = page.locator('.analyze-tab .tab-item');
    this.customizeTab = page.locator('button:has-text("customize")');
    this.customizeTabItems = page.locator('.customize-tab .tab-item');
  }

  async gotoDashboard() {
    await this.page.goto('https://test.fitnessbi.com/home'); // Update with actual URL
  }

  async getLeftMenuItems(): Promise<string[]> {
    await this.waitForPageLoad();
    return this.leftMenuItems.locator('span.MuiListItemText-primary').allTextContents();
  }

  async clickAnalyzeTab() {
    await this.analyzeTab.click();
  }

  async getAnalyzeTabItems(): Promise<string[]> {
    return this.analyzeTabItems.allTextContents();
  }

  async clickCustomizeTab() {
    await this.customizeTab.click();
  }

  async getCustomizeTabItems(): Promise<string[]> {
    return this.customizeTabItems.allTextContents();
  }
}
