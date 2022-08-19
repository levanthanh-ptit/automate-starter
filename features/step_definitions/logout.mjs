import { When, Then } from "@cucumber/cucumber";
import { By, until } from "selenium-webdriver";
import { driver } from "./driver.mjs";

When('click btn logout', {timeout: 100000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  await driver.findElement(By.xpath(`/html/body/header/div/div/div/div/div/div[2]/div/div[2]/div[3]/div/button`)).click();
  await driver.findElement(By.xpath(`//*[@id="fadein"]/header/div/div/div/div/div/div[2]/div/div[2]/div[3]/div/ul/li[5]/a`)).click();
});
Then('back to login page', {timeout: 100000}, async function(){
  await driver.wait(until.urlIs("https://www.phptravels.net/login"));
})