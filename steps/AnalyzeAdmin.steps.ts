import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the main dashboard', async function(this: CustomWorld) {
  await this.analyzeAdminPage.gotoDashboard();
});

Given('I login with valid {string} credentials', async function(this: CustomWorld, userType: string) {
  // Only handles "Analyze Admin" for now
  if (userType === 'Analyze Admin') {
    await this.loginPage.visit();
    await this.loginPage.loginToApp({
      username: 'bharathavr2k1@gmail.com',
      password: 'Bharath*123',
    });
  } else {
    throw new Error(`User type ${userType} not implemented in step definition.`);
  }
});

Then('I should see the following left menu items:', async function(this: CustomWorld, dataTable) {
  const expectedItems = dataTable.raw().map((row: string[]) => row[0]);
  const actualItems = await this.analyzeAdminPage.getLeftMenuItems();
  expect(actualItems).toEqual(expect.arrayContaining(expectedItems));
});

When('I click on the {string} tab', async function(this: CustomWorld, tabName: string) {
  if (tabName === 'Analyze') {
    await this.analyzeAdminPage.clickAnalyzeTab();
  } else if (tabName === 'Customize') {
    await this.analyzeAdminPage.clickCustomizeTab();
  } else {
    throw new Error(`Tab ${tabName} not implemented in step definition.`);
  }
});

Then('I should see the following under the {string} tab:', async function(this: CustomWorld, tabName: string, dataTable) {
  const expectedItems = dataTable.raw().map((row: string[]) => row[0]);
  let actualItems: string[] = [];
  if (tabName === 'Analyze') {
    actualItems = await this.analyzeAdminPage.getAnalyzeTabItems();
  } else if (tabName === 'Customize') {
    actualItems = await this.analyzeAdminPage.getCustomizeTabItems();
  } else {
    throw new Error(`Tab ${tabName} not implemented in step definition.`);
  }
  expect(actualItems).toEqual(expect.arrayContaining(expectedItems));
});

// For compatibility with Cucumber's snippet output
When('I should see the following under the Analyze tab:', async function(this: CustomWorld, dataTable) {
  const expectedItems = dataTable.raw().map((row: string[]) => row[0]);
  const actualItems = await this.analyzeAdminPage.getAnalyzeTabItems();
  expect(actualItems).toEqual(expect.arrayContaining(expectedItems));
});

When('I should see the following under the Customize tab:', async function(this: CustomWorld, dataTable) {
  const expectedItems = dataTable.raw().map((row: string[]) => row[0]);
  const actualItems = await this.analyzeAdminPage.getCustomizeTabItems();
  expect(actualItems).toEqual(expect.arrayContaining(expectedItems));
});

When('I click on the user profile menu', async function(this: CustomWorld) {
  await this.homePage.profileIcon.click();
});

Then('I should see the following user options:', async function(this: CustomWorld, dataTable) {
  const expectedOptions = dataTable.raw().map((row: string[]) => row[0]);
  const actualOptions = await this.homePage.getProfileMenuOptions();
  for (const option of expectedOptions) {
    if (!actualOptions.includes(option)) {
      throw new Error(`Expected user option '${option}' not found. Actual options: ${actualOptions.join(', ')}`);
    }
  }
});

Given('I navigate to the {string} page', async function(this: CustomWorld, pageName: string) {
  await this.commonPage.navigateToPage(pageName);
});

Then('I should see the {string} section', async function(this: CustomWorld, sectionName: string) {
  const visible = await this.homePage.hasSection(sectionName);
  if (!visible) {
    throw new Error(`Section '${sectionName}' not found on the page.`);
  }
});

Then('I should see the message {string}', async function(this: CustomWorld, message: string) {
  const visible = await this.homePage.getSectionFallbackMessage(message);
  if (!visible) {
    throw new Error(`Expected message '${message}' not found on the page.`);
  }
});
