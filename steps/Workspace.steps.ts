import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('I click on the global search bar', async function(this: CustomWorld) {
  await this.homePage.searchBar.click();
});

When('I type {string} in the search bar', async function(this: CustomWorld, text: string) {
  await this.homePage.searchBar.fill(text);
});

When('I select {string} from the search results', async function(this: CustomWorld, workspaceName: string) {
  await this.page.getByText(workspaceName, { exact: true }).click();
});

Then('I should be navigated to the {string} workspace', async function(this: CustomWorld, workspaceName: string) {
  // Assert the workspace dashboard or unique element for the workspace is visible
  const dashboard = this.page.getByText(workspaceName, { exact: true });
  expect(await dashboard.isVisible()).toBeTruthy();
}); 