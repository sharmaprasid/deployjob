import { expect, test } from "@playwright/test";
import { loginAsEmployer, loginAsJobSeeker } from "./authHelpers";

test("Employer Profile View and Edit", async ({ page }) => {
  await loginAsEmployer(page);

  await page.locator("#profile").click();
  await page.getByRole("button", { name: "Edit Profile" }).click();

  await page.getByRole("textbox", { name: "Phone:" }).fill("7012450283");
  await page.getByRole("textbox", { name: "Company Name:" }).fill("Facebook Inc.");
  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Profile updated successfully!")).toBeVisible();
});

test("Job Seeker Profile View and Edit", async ({ page }) => {
  await loginAsJobSeeker(page);

  await page.locator("#profile").click();
  await page.getByRole("button", { name: "Edit Profile" }).click();

  await page.getByRole("textbox", { name: "Name:" }).fill("Amrit Shrestha");
  await page.getByRole("textbox", { name: "Phone:" }).fill("1234563901");
  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Profile updated successfully!")).toBeVisible();
});
