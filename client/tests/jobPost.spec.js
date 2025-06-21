import { expect, test } from "@playwright/test";
import { loginAsEmployer } from "./authHelpers";

test("Employer can create a new job post", async ({ page }) => {
  await loginAsEmployer(page);

  await expect(page.getByRole("link", { name: "POST NEW JOB" })).toBeVisible();
  await page.getByRole("link", { name: "POST NEW JOB" }).click();

  await page.getByRole("link", { name: "POST NEW JOB" }).click();

  await page.getByRole("textbox", { name: "Job Title" }).fill("Senior React Developer");

  await page
    .getByRole("combobox", { name: /Select Category/i })
    .selectOption("Frontend Web Development");

  await page.getByRole("textbox", { name: "Country" }).fill("Nepal");
  await page.getByRole("textbox", { name: "City" }).fill("Kathmandu");
  await page.getByRole("textbox", { name: "Location" }).fill("Sesmati");

  await page.getByRole("combobox", { name: /Select Salary Type/i }).selectOption("Ranged Salary");
  await page.getByPlaceholder("Salary From").fill("20000");
  await page.getByPlaceholder("Salary To").fill("30000");

  await page.getByRole("textbox", { name: "Job Description" }).fill(
    `We're looking for a Senior React Developer to lead front-end development efforts, 
build high-quality web applications, and mentor junior developers. 
You'll work closely with designers and backend engineers to deliver scalable, maintainable React-based solutions.

Key Skills: React.js, JavaScript/TypeScript, REST APIs, state management (Redux/Zustand), 
code reviews, performance optimization.`
  );

  await page.getByRole("button", { name: "Create Job" }).click();

  await expect(page.getByText("Job Posted Successfully!")).toBeVisible();
  await expect(page).toHaveURL("http://localhost:5173/job/me");
});
