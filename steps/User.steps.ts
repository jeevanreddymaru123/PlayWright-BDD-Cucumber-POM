import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { updateBulkUserCSVEmailNumbers } from '../support/utils';

// Background Steps
Given('I search and select {string} workspace', async function(this: CustomWorld, workspaceName: string) {
  await this.homePage.searchAndSelectWorkspace(workspaceName);
});

Given('I move to {string} tab', async function(this: CustomWorld, tabName: string) {
  await this.workspacePage.selectTab(tabName);
});

When('I create a user with invalid credentials', async function(this: CustomWorld) {
  // Click the create user button
  await this.workspacePage.createTestUser("(91) 38921023")
});

When('I create a test user', async function(this: CustomWorld) {
  await this.workspacePage.createTestUser();
});

// Edit User Scenario
When('I select the Edit action for the test user', async function(this: CustomWorld) {
  await this.workspacePage.selectTestUserEditAction();
});

When('Edit a random field and save', async function(this: CustomWorld) {
  await this.workspacePage.editUser();
});

// Delete User Scenario
When('I select the Delete action for the test user', async function(this: CustomWorld) {
  await this.workspacePage.selectUpdatedUserDeleteAction();
});

When('I confirm to delete the user', async function(this: CustomWorld) {
  await this.workspacePage.confirmDeleteUser();
});

When('I select Delete User from the edit user window', async function(this: CustomWorld){
  await this.workspacePage.selectDeleteUserFromEditWindow();
});

When('I start the bulk user creation process', async function(this: CustomWorld) {
  await this.workspacePage.clickBulkCreateUser();
});

When('I upload the bulk user CSV file', async function(this: CustomWorld) {
  // Generate unique numbers for each email row
  const now = Date.now();
  updateBulkUserCSVEmailNumbers('./UploadFiles/UserBuldCreationTable.csv', [now, now + 1]);
  await this.workspacePage.uploadBulkUserCSV();
});

Then('I should see a confirmation that the file was uploaded', async function(this: CustomWorld) {
  await this.workspacePage.assertBulkUserFileUploaded();
});

When('I save the bulk user creation', async function(this: CustomWorld) {
  await this.workspacePage.saveBulkUserCreation();
});

When('I send emails for bulk users', async function(this: CustomWorld) {
  await this.workspacePage.sendBulkUserEmails();
});

Then('I should see a confirmation for bulk user emails', async function(this: CustomWorld) {
  await this.workspacePage.assertBulkUserEmailsSent();
});