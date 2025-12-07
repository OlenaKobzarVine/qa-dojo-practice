import { expect, mergeTests } from "@playwright/test";
import { test } from "../MyFixture";
import { test as base } from "./2";

const mergedTests = mergeTests(test, base);

test.describe("suite 1 ", () => {
  mergedTests.use({ standardUserName: 'standard_user' });

  mergedTests(
    "navigate to home page, nav should be visible",
    async ({ token }) => {
      console.log(token);
    }
  );
});

test.describe("suite 2 ", () => {
  mergedTests.use({ standardUserName: "problem_user" });

  mergedTests(
    "navigate t111o home page, nav should be visible",
    async ({ standardUserName }) => {
      expect(true, "This is should be true").toBeTruthy();
    }
  );
});
