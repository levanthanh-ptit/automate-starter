import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { Builder, Capabilities } from "selenium-webdriver";
import "chromedriver";

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
export const driver = new Builder().withCapabilities(capabilities).build();

BeforeAll(async function () {
  await driver;
});

AfterAll(async function () {
  await driver.quit();
});
