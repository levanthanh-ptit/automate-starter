import { Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { getState } from "./state.mjs";
import { driver } from "./driver.mjs";

Then(
  "the page title should start with search keyword",
  { timeout: 60 * 1000 },
  async function () {
    const state = getState(this);
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf(state.keyword, 0) === 0;
    expect(isTitleStartWithCheese).to.equal(true);
  }
);
