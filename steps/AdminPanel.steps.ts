import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('I create a test admin', async function(this: CustomWorld) {
  await this.adminPanelPage.createTestAdmin();
});

Given('I navigate to {string}', async function(this:CustomWorld, sectionName: string) {
    await this.adminPanelPage.selectSection(sectionName);
});

// Delete User Scenario
When('I search for the test admin', async function(this: CustomWorld) {
  await this.adminPanelPage.searchForTestAdmin();
  await this.page.waitForSelector('[data-testid="actions-menu-button"]', { timeout: 10000 });
});

When('I click the action button for the test admin', async function(this: CustomWorld) {
  await this.workspacePage.selectUserActionButton();
});

When('I select the delete option for the test admin', async function(this: CustomWorld) {
  await this.workspacePage.selectDeleteUser();
});

