import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import {
  BASE_URL,
  SET_NEWPASSWORD,
  USER_CREDENTIALS,
  GMAILUSER_CREDENTIALS,
  MAILBOX,
} from "../testData/UserData";

export class LoginPage extends BasePage {
  //Defining class selectors
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBTN: Locator;
  readonly errorMessage: Locator;
  readonly forgotPasswordBtn: Locator;

  //Init selectors using constructor
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("#email");
    this.passwordInput = page.locator("#password-label");
    this.loginBTN = page.locator("#mui-1");
    this.errorMessage = page.locator(
      "//div[contains(text(),'Wrong e-mail or password!')]"
    );
    this.forgotPasswordBtn = page.locator(
      "//a[normalize-space()='Forgot password']"
    );
    this.url = BASE_URL + "/signin";
  }

  //Defining login page methods
  //rename to fill login form and check if we've got password -> login to app if not -> restore password

  async loginToApp(userCredentials: { username: string; password: string }) {
    await this.usernameInput.fill(userCredentials.username);
    await this.passwordInput.fill(userCredentials.password);
    await this.loginBTN.click();
  }

  async fillInLoginForm(userCredentials: {
    username: string;
    password?: string;
  }) {
    await this.usernameInput.fill(userCredentials.username);
    if (userCredentials.password) {
      await this.passwordInput.fill(userCredentials.password);
      await this.loginBTN.click();
    } else {
      await this.forgotPasswordBtn.click();
    }
  }

  async assertLoginPageURL() {
    expect(this.url).toContain("/signin");
  }

  async loginWithNewPassword(newPage: import("@playwright/test").Page) {
    // Use the test email and the new password
    await newPage.locator("#email").fill(SET_NEWPASSWORD.username);
    await newPage.locator("#password-label").fill(SET_NEWPASSWORD.newPassword);
    await newPage.locator("#mui-1").click();
  }

  async clickForgotPassword() {
    await this.forgotPasswordBtn.click();
  }

  async enterResetEmail() {
    await this.page.fill(
      'input[type="email"], #email',
      SET_NEWPASSWORD.username
    );
  }

  async loginWithGmailAccount() {
    // Click Gmail login button (update selector as needed)
    await this.page.getByRole("link", { name: "Google" }).click();
    await this.page.fill(
      'input[type="email"], #identifierId',
      GMAILUSER_CREDENTIALS.username
    );
    await this.page.click('button:has-text("Next"), #identifierNext');
    await this.page.fill(
      'input[type="password"]',
      GMAILUSER_CREDENTIALS.password
    );
    await this.page.click('button:has-text("Next"), #passwordNext');
  }

  async loginWithWindowsAccount() {
    // Click Windows login button (update selector as needed)
    await this.page.locator('a[aria-label="Microfost"]').click();
    await this.page.fill('input[type="email"], #i0116', MAILBOX.username);
    await this.page.click('input[type="submit"], #idSIButton9');
    await this.page.fill('input[type="password"], #i0118', MAILBOX.password);
    await this.page.click('input[type="submit"], #idSIButton9');
    const noButton = this.page.locator(
      'input[type="button"][id="idBtn_Back"][value="No"]'
    );
    await noButton.click();
    this.waitForPageLoad();
  }

  async assertHomePageURL() {
    await expect(this.page).toHaveURL("https://test.fitnessbi.com/home");
  }

  async assertWindowsHomePageURL() {
    await expect(this.page).toHaveURL("https://test.fitnessbi.com/", { timeout: 60000 }); // 30 seconds
  }
}

export default LoginPage;
