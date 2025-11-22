import { test, Page } from '@playwright/test';
import {
  registrationWithValidData,
  createNArticles,
  findCreatedArticlesByNavigatingPagination,
} from './cyclesConduit';

test('Create N articles', async ({ page }) => {
  const n = 2 * 6;
  await registrationWithValidData(
    page,
    'https://demo.learnwebdriverio.com/register'
  );
  //loginToPortal(page, 'https://demo.learnwebdriverio.com/login');

  await createNArticles(
    page,
    'https://demo.learnwebdriverio.com/editor',
    n / 6
  );
  await findCreatedArticlesByNavigatingPagination(
    page,
    'https://demo.learnwebdriverio.com/editor',
    12
  );
});
