import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, webkit,firefox, devices, chromium } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import WorkspacePage from '../pages/WorkspacePage';
import { HomePage } from '../pages/HomePage';
import { setDefaultTimeout } from '@cucumber/cucumber';
import AdminPanelPage from '../pages/AdminPanelPage';
import { AnalyzeAdminPage } from '../pages/AnalyzeAdminPage';
import { OutlookMailPage } from '../pages/OutlookMailPage';
import { SetPasswordPage } from '../pages/SetPasswordPage';
import { FavouritePage } from '../pages/FavouritePage';
import { CommonPage } from '../pages/CommonPage';
import { RecentPage } from '../pages/RecentPage';

setDefaultTimeout(20 * 1000);

export class CustomWorld extends World {
  private static browserPool: Browser[] = [];
  private static browserIndex = 0;
  private static maxBrowsers = 1; 
  private static initializationPromise: Promise<void> | null = null;

  
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  resetPage?: Page;
  loginPage!: LoginPage;
  workspacePage!: WorkspacePage;
  homePage!: HomePage;
  adminPanelPage!: AdminPanelPage;
  analyzeAdminPage!: AnalyzeAdminPage;
  outlookMailPage!: OutlookMailPage;
  setPasswordPage!: SetPasswordPage;
  favouritePage!: FavouritePage;
  commonPage!: CommonPage;
  recentPage!: RecentPage;

  private static async initializePool() {
    if (!CustomWorld.initializationPromise) {
      CustomWorld.initializationPromise = (async () => {
        for (let i = 0; i < CustomWorld.maxBrowsers; i++) {
          // Hardcoded browser configuration 
          const browser = await firefox.launch({ 
            headless: false,
            args: ['--disable-web-security', '--allow-running-insecure-content']
          });
          CustomWorld.browserPool.push(browser);
        }
      })();
    }
    return CustomWorld.initializationPromise;
  }

   async init() {
    await CustomWorld.initializePool();

    // Get a browser from the pool
    this.browser = CustomWorld.browserPool[
      CustomWorld.browserIndex % CustomWorld.maxBrowsers
    ];
    CustomWorld.browserIndex++;

    // Create context with hardcoded settings
    this.context = await this.browser.newContext({
      ...devices['Desktop Safari'], 
      viewport: { width: 1366, height: 768 },
      ignoreHTTPSErrors: true
    });

    this.page = await this.context.newPage();
    
    this.page.setDefaultTimeout(90 * 1000); 
    this.page.setDefaultNavigationTimeout(100 * 1000); 

    this.loginPage = new LoginPage(this.page);
    this.workspacePage = new WorkspacePage(this.page);
    this.homePage = new HomePage(this.page);
    this.adminPanelPage= new AdminPanelPage(this.page);
    this.analyzeAdminPage = new AnalyzeAdminPage(this.page);
    this.outlookMailPage = new OutlookMailPage(this.page);
    this.setPasswordPage = new SetPasswordPage(this.page);
    this.favouritePage = new FavouritePage(this.page);
    this.commonPage = new CommonPage(this.page);
    this.recentPage = new RecentPage(this.page);

    if (process.env.BASE_URL) {
      await this.page.goto(process.env.BASE_URL);
    }
  }

  async takeScreenshot(name: string) {
    const screenshotPath = `${this.parameters.screenshotsDir}${name}.png`;
    await this.page.screenshot({ path: screenshotPath });
    this.attach(await this.page.screenshot(), 'image/png');
    return screenshotPath;
  }

  async close() {
    await this.page.close();
    await this.context.close();
  }

  static async cleanup() {
    await Promise.all(CustomWorld.browserPool.map(b => b.close()));
    CustomWorld.browserPool = [];
    CustomWorld.browserIndex = 0;
    CustomWorld.initializationPromise = null;
  }
}

setWorldConstructor(CustomWorld);