import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { BASE_URL } from "../testData/UserData";

export class HomePage extends BasePage {
  readonly page: Page;
  readonly homeButton: Locator;
  readonly profileIcon: Locator;
  readonly logoutButton: Locator;
  readonly searchBar: Locator;
  readonly profileMenuProfile: Locator;
  readonly profileEmail: Locator;
  readonly createButton: Locator;
  readonly createWorkspaceOption: Locator;
  readonly workspaceNameInput: Locator;
  readonly createWorkspaceOkButton: Locator;
  readonly createWorkspaceSuccessMessage: Locator;

  //check wether datatestid require some specific naming from playwright docs side
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.homeButton = page.getByTestId("side-bar-home-menu-btn");
    this.profileIcon = page.getByTestId("settings-menu-user-name");
    this.logoutButton = page.getByTestId("settings-menu-logout-menu-item");
    this.searchBar = page.getByTestId("search-input");
    this.profileMenuProfile = page.getByTestId("settings-menu-profile-menu-item");
    this.profileEmail = page.locator('input#email');
    this.createButton = page.getByTestId("create-button");
    this.createWorkspaceOption = page.getByTestId("create-workspace-option");
    this.workspaceNameInput = page.getByTestId("workspace-name-input");
    this.createWorkspaceOkButton = page.getByTestId("create-workspace-ok-btn");
    this.createWorkspaceSuccessMessage = page.getByText("New workspace successfully created!", { exact: true });
    this.url = BASE_URL + "/home";
  }

  getWorkSpace(name: string) {
    return this.page.getByRole("button", { name: name });
  }

  async logoutFromApp() {
    await this.profileIcon.click();
    await this.logoutButton.click();
  }

  async searchWorkspace(name: string) {
    await this.searchBar.click();
    await this.searchBar.fill(name);
  }

  async selectFormaGym() {
    await this.searchWorkspace("forma");
    await this.page.getByText("Forma Gym", { exact: true }).click();
  }

  async searchAndSelectWorkspace(workspace: string) {
    await this.page.getByTestId("search-input").fill(workspace);
    await this.waitForPageLoad();
    await this.page.getByText(workspace, { exact: true }).click();
  }

  async openProfile() {
    await this.profileIcon.click();
    await this.profileMenuProfile.click();
  }

  async getProfileEmail(): Promise<string> {
    await this.profileEmail.waitFor({ state: 'visible' });
    return this.profileEmail.inputValue();
  }

  async getProfileMenuOptions(): Promise<string[]> {
    await this.profileIcon.click();
    // Assume all options in the dropdown have role="menuitem" and are visible after click
    const options = await this.page.locator('[role="menuitem"]').allTextContents();
    return options.map(opt => opt.trim());
  }

  async gotoHomePage() {
    await this.page.goto(this.url);
    await this.waitForPageLoad();
  }

  async hasSection(sectionName: string): Promise<boolean> {
    // Try to find a section by its visible text
    const section = this.page.getByText(sectionName, { exact: true });
    return section.isVisible();
  }

  async getSectionFallbackMessage(message: string): Promise<boolean> {
    // Try to find a fallback message by its visible text
    const msg = this.page.getByText(message, { exact: true });
    return msg.isVisible();
  }

  async clickCreateButton() {
    await this.createButton.click();
  }

  async selectCreateWorkspaceOption() {
    await this.createWorkspaceOption.click();
  }

  async typeWorkspaceName(name: string) {
    await this.workspaceNameInput.fill(name);
  }

  async clickCreateWorkspaceOk() {
    await this.createWorkspaceOkButton.click();
  }

  async assertWorkspaceCreatedSuccess() {
    await this.createWorkspaceSuccessMessage.waitFor({ state: 'visible' });
  }
}
