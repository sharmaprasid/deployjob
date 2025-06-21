import { expect, test } from "@playwright/test";

test("Employer registration flow", async ({ page }) => {
  await page.goto("http://localhost:5173/register");
  await expect(page.locator("div.header h3").first()).toHaveText(/Create a new account/i);
  await page.getByRole("combobox").selectOption("Employer");

  await page.getByRole("textbox", { name: "Company Name" }).fill("Facebook Inc.");
  await page.getByRole("textbox", { name: "Company Location" }).fill("USA");
  await page.getByRole("textbox", { name: "Industry (optional)" }).fill("Global");
  await page.getByRole("textbox", { name: "https://example.com" }).fill("https://www.facebook.com");

  await page.getByRole("textbox", { name: "Enter your name" }).fill("Mark Zuckerberg");
  await page.getByRole("textbox", { name: "Enter your email" }).fill("mark@test.com");
  await page.getByPlaceholder("Enter your phone").fill("7056904012");
  await page.getByRole("textbox", { name: "Enter your password" }).fill("mark@test.com");

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("User Registered Successfully !")).toBeVisible();
  await expect(page).toHaveURL("http://localhost:5173");
});

test("Employer login and logout flow", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.getByRole("combobox").selectOption("Employer");
  await page.getByRole("textbox", { name: "Enter your email" }).fill("mark@test.com");
  await page.getByRole("textbox", { name: "Enter your Password" }).fill("mark@test.com");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL("http://localhost:5173/");
  await expect(page.getByText("User Logged In Sucessfully !")).toBeVisible();

  await page.waitForTimeout(3000);
  await page.getByRole("button", { name: "LOGOUT" }).click();
});

test("Job Seeker registration flow", async ({ page }) => {
  await page.goto("http://localhost:5173/register");

  await expect(page.locator("div.header h3").first()).toHaveText(/Create a new account/i);
  await page.getByRole("combobox").selectOption("Job Seeker");

  await page.getByRole("textbox", { name: "Enter your name" }).fill("Amrit Shrestha");
  await page.getByRole("textbox", { name: "Enter your email" }).fill("amrit777@test.com");
  await page.getByPlaceholder("Enter your phone").fill("1234567890");
  await page.getByRole("textbox", { name: "Enter your password" }).fill("Asdfg@12345");

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("User Registered Successfully !")).toBeVisible();
  await expect(page).toHaveURL("http://localhost:5173");
});

test("Job Seeker login and logout flow", async ({ page }) => {
  await page.goto("http://localhost:5173/login");

  await page.getByRole("combobox").selectOption("Job Seeker");
  await page.getByRole("textbox", { name: "Enter your email" }).fill("amrit777@test.com");
  await page.getByRole("textbox", { name: "Enter your Password" }).fill("Asdfg@12345");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL("http://localhost:5173/");
  await expect(page.getByText("User Logged In Sucessfully !")).toBeVisible();

  await page.waitForTimeout(3000);
  await page.getByRole("button", { name: "LOGOUT" }).click();
});
