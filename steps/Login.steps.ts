import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { USER_CREDENTIALS, LOGIN_CREDENTIALS } from "../testData/UserData";

// Background Steps
Given('I navigate to the login page', async function(this: CustomWorld) {
  await this.loginPage.visit();
});

When('I login with valid credentials', async function(this: CustomWorld) {
  await this.loginPage.loginToApp(USER_CREDENTIALS);
});

When('I login with invalid credentials', async function() {
  await this.loginPage.loginToApp({...USER_CREDENTIALS, password: "qwerty"});
});

When('I login as {string}', async function(this: CustomWorld, role: string) {
  const creds = LOGIN_CREDENTIALS[role];
  if (!creds) throw new Error(`No credentials found for role: ${role}`);
  await this.loginPage.loginToApp(creds);
});

Given('I click on the login button', async function(this: CustomWorld) {
  await this.page.click('#mui-1');
});

When('I click on the create button', async function(this: CustomWorld) {
  await this.homePage.clickCreateButton();
});

When('I select workspace from the create options', async function(this: CustomWorld) {
  await this.homePage.selectCreateWorkspaceOption();
});

When('I type the workspace name {string}', async function(this: CustomWorld, name: string) {
  await this.homePage.typeWorkspaceName(name);
});

When('I click ok to create the workspace', async function(this: CustomWorld) {
  await this.homePage.clickCreateWorkspaceOk();
});

Then('I should see the home page', async function(this: CustomWorld) {
  await this.loginPage.assertHomePageURL();
});

Then('I should see the notification that {string}', async function(this: CustomWorld, message: string) {
  await this.commonPage.assertMessage(message);
});

Then('I click the profile action button', async function(this: CustomWorld) {
  await this.homePage.profileIcon.click();
});

Then('I select the profile option from the menu', async function(this: CustomWorld) {
  await this.homePage.profileMenuProfile.click();
});

Then('The profile email should match the {string} login email', async function(this: CustomWorld, role: string) {
  const creds = LOGIN_CREDENTIALS[role];
  if (!creds) throw new Error(`No credentials found for role: ${role}`);
  const actualEmail = await this.homePage.getProfileEmail();
  if (actualEmail.trim() !== creds.username.trim()) {
    throw new Error(`Expected profile email to be '${creds.username}', but got '${actualEmail}'`);
  }
});

Then('I should see {string}', async function(this: CustomWorld, message: string) {
  if (message === 'New workspace successfully created!') {
    await this.homePage.assertWorkspaceCreatedSuccess();
  } else {
    throw new Error(`Assertion for message '${message}' not implemented.`);
  }
});

When('I go to Outlook to check the reset email', async function(this: CustomWorld) {
  await this.outlookMailPage.openMailbox();
});

When('I follow the password reset link in the email', { timeout: 90000 } , async function(this: CustomWorld) {
  this.resetPage = await this.outlookMailPage.followResetLink();
});

When('I set a new password', async function(this: CustomWorld) {
  if (!this.resetPage) throw new Error('Reset page is not available');
  await this.setPasswordPage.setNewPassword(this.resetPage);
});

Then('I should be able to login with the new password', async function(this: CustomWorld) {
  if (!this.resetPage) throw new Error('Reset page is not available');
  await this.loginPage.loginWithNewPassword(this.resetPage);
});

When('I click the "Forgot password" link', async function(this: CustomWorld) {
  await this.loginPage.clickForgotPassword();
});

When('I enter the email address for password reset', async function(this: CustomWorld) {
  await this.loginPage.enterResetEmail();
});

When('I login to outlook to check the reset email', async function(this: CustomWorld) {
  await this.outlookMailPage.loginToOutlook();
});

When('I login with Gmail account', async function(this: CustomWorld) {
  await this.loginPage.loginWithGmailAccount();
});

When('I login with Windows account', async function(this: CustomWorld) {
  await this.loginPage.loginWithWindowsAccount();
});

Then('I should see the windows home page', { timeout: 60000 }, async function(this: CustomWorld) {
  await this.loginPage.assertWindowsHomePageURL();
});
