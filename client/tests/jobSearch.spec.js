import { expect, test } from "@playwright/test";
import { loginAsEmployer } from "./authHelpers";

test("Employer Profile View and Edit", async ({ page }) => {
  await loginAsEmployer(page);

  await page.locator("#profile").click();
  await page.getByRole("button", { name: "Edit Profile" }).click();

  await expect(page.getByText("Profile updated successfully!")).toBeVisible();
});
