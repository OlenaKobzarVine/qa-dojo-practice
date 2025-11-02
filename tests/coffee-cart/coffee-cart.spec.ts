import { test, expect } from "@playwright/test";

test("Check the cost of an Espresso & Americano order. CC-001", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Americano"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $17.00"
  );
});

test("Check the increment for one item in the order. CC-002", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.getByRole("button", { name: "Add one Americano" }).click();
  await page.getByRole("button", { name: "Add one Americano" }).click();
  await expect(page.getByText("Americano x 3+-")).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $31.00"
  );
});

test("Check deletion for one item in the order. CC-003", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.getByRole("button", { name: "Add one Americano" }).click();
  await page.getByRole("button", { name: "Add one Americano" }).click();
  await expect(page.getByText("Americano x 3+-")).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $31.00"
  );
  await page.getByRole("button", { name: "Remove one Espresso" }).click();
  await expect(page.getByText("Espresso x 1+-")).toBeHidden();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $27.00"
  );
});

test("Check the order submission with empty Name field. CC-004", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
  await expect(page.locator("h1")).toContainText("Payment details"); /// ???
});

test("Check the order submission with empty Email field. CC-005", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
  await expect(page.locator("h1")).toContainText("Payment details");
});

test("Check the order submission with valid Email field. CC-006", async ({
  page,
}) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).fill("qwerty");
  await page.getByRole("textbox", { name: "Email" }).fill("qwerty@qwerty.com");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("button", { name: "Thanks for your purchase." })).toBeVisible();
});

// coffee-cart
