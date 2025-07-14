import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { MAILBOX } from "../testData/UserData";

export class OutlookMailPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signinBtn: Locator;
  readonly nextBtn: Locator;
  readonly skipOtp: Locator;
  readonly selectEmailLink: Locator;
  readonly setNewPasswordBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("(//input[@id='i0116'])[1]");
    this.passwordInput = page.locator("(//input[@id='i0118'])[1]");
    this.signinBtn = page.locator("#idSIButton9");
    this.nextBtn = page.locator("#idSubmit_ProofUp_Redirect");
    this.skipOtp = page.locator("a[role='link']");
    this.selectEmailLink = page.locator("(//div[@class='EeHm8'])[3]");
    this.setNewPasswordBtn = page.locator(
      "//a[normalize-space()='Set new password']"
    );
  }

  async mailBoxAccess(mailData: {
    mailUrl: string;
    username: string;
    password: string;
  }) {
    await this.page.goto(mailData.mailUrl);
    await this.usernameInput.fill(mailData.username);
    await this.signinBtn.click();
    await this.passwordInput.fill(mailData.password);
    await this.signinBtn.click();
    await this.nextBtn.click();
    await this.skipOtp.click();
    await this.signinBtn.click();
  }

  async openMailbox() {
    await this.page.goto("https://outlook.office.com/");
  }

  async followResetLink(): Promise<Page> {
    const latestMail = this.page
      .locator('div[role="option"][aria-label*="set your password"]')
      .first();
    await latestMail.waitFor({ state: "visible", timeout: 20000 });
    await latestMail.click();

    const href = await this.page
      .locator("a.x_link", { hasText: "Set new password" })
      .first()
      .getAttribute("href");

    if (href) {
      const newPage = await this.page.context().newPage(); // open a new tab manually
      await newPage.goto(href);
      await newPage.waitForLoadState("domcontentloaded");

      // Proceed with filling the reset password form
      return newPage;
    } else {
      throw new Error("Reset password href not found");
    }
    
  }

  async loginToOutlook() {
    await this.page.goto(MAILBOX.mailUrl);
    await this.usernameInput.fill(MAILBOX.username);
    await this.signinBtn.click();
    await this.passwordInput.fill(MAILBOX.password);
    await this.signinBtn.click();
    const noButton = this.page.locator(
      'input[type="button"][id="idBtn_Back"][value="No"]'
    );
    await noButton.click();
  }
}
