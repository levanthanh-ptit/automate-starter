import { Given, When, Then } from "@cucumber/cucumber";
import { By, Key } from "selenium-webdriver";
import { expect } from "chai";
import { getState } from "./state.mjs";
import { driver } from "./driver.mjs";

Given("I am on the Google search page", async function () {
  const state = getState(this);
  await driver.get("http://www.google.com");
});

When("I search for {string}", async function (searchTerm) {
  const state = getState(this);
  state.keyword = `${searchTerm}`;
  const element = await driver.findElement(By.name("q"));
  await element.sendKeys(searchTerm, Key.RETURN);
});

Then(
  "the page title should start with {string}",
  { timeout: 60 * 1000 },
  async function (searchTerm) {
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf(`${searchTerm}`, 0) === 0;
    expect(isTitleStartWithCheese).to.equal(true);
  }
);
