import {Given,When,Then} from "@cucumber/cucumber"
import { By, until } from "selenium-webdriver";
import {driver} from './driver.mjs'
import {getState} from './state.mjs'

Given("userName and passWord", function(){
  const state = getState(this);
  state.email = "ab@gmail.com"
  state.password = "123456"
})
When("input userName and passWord", {timeout:1000000}, async function(){
  const state = getState(this);
  await driver.get("https://www.phptravels.net/login");
  await driver.findElement(By.name("email")).sendKeys(state.email);
  await driver.findElement(By.name("password")).sendKeys(state.password);
})

When("click on login", async function(){
  await driver.findElement(By.xpath(`//*[@id="fadein"]/div[3]/div/div[2]/div[2]/div/form/div[3]/button`)).click();
})

Then("redirect to Dashboard", {timeout:1000000}, async function() {
  await driver.wait(until.urlIs("https://www.phptravels.net/account/dashboard"));
})