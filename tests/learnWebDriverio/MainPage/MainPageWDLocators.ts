import { Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocatorsWD';

export class MainPageWDLocators extends BaseLocators {
  readonly newArticleLink: Locator =
    this.baseLocator.locator(`//a[@href="/editor"]`);
  readonly mainPage: Locator = this.baseLocator.locator("[href='/']");
}
