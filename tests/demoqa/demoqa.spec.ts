import { test, expect } from '@playwright/test';

interface Border {
  id: string;
  label: string;
  idInput: string;
  value: string;
}

const border: Border[] = [
  { id: 'name', label: 'Name', idInput: 'userName', value: 'Vine' },
  {
    id: 'email',
    label: 'Email',
    idInput: 'userEmail',
    value: 'vine@example.com',
  },
  {
    id: 'currentAddress',
    label: 'Current Address',
    idInput: 'currentAddress',
    value: 'Cherkasy',
  },
  {
    id: 'permanentAddress',
    label: 'Permananet Address',
    idInput: 'permanentAddress',
    value: 'UA',
  },
];

test('DMQ-01 - Verify form submission', async ({ page }) => {
  const baseUrl = 'https://demoqa.com/text-box';
  const btn_submit = page.locator("//*[@id='submit']");
  const block_output = page.locator("//*[@id='output']");

  await page.goto(baseUrl);

  for (let i = 0; i < border.length; i++) {
    await page.locator(`//*[@id='${border[i].idInput}']`).fill(border[i].value);
  }

  await btn_submit.click(); // btnSubmit
  await expect(block_output).toBeVisible();

  for (let i = 0; i < border.length; i++) {
    const element = block_output.locator(`//*[@id='${border[i].id}']`);
    const fullText = await element.textContent();
    expect(fullText).toContain(border[i].label);
    expect(fullText).toContain(border[i].value);
    console.log(`${fullText?.trim()}`);
  }
});

test('DMQ-02 Notes and Commands checkboxes are checked', async ({ page }) => {
  const baseUrl = 'https://demoqa.com/checkbox';
  const btn_expandAll = page.locator("//button[@title='Expand all']");
  const checkbox_notes = page.locator(
    "//*[@class='rct-title' and text()='Notes']"
  );
  const checkbox_commands = page.locator(
    "//*[@class='rct-title' and text()='Commands']"
  );

  await page.goto(baseUrl);
  await btn_expandAll.click();

  await checkbox_notes.click();
  await expect(checkbox_notes).toBeVisible();

  await checkbox_commands.click();
  await expect(checkbox_commands).toBeVisible();
});
