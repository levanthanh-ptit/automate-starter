import { After, Status } from "@cucumber/cucumber";
import { driver } from "./driver.mjs";

// Screenshot every error
After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    var world = this;
    const base64Img = await driver.takeScreenshot();
    await world.attach(Buffer.from(base64Img, "base64"), "image/png");
  }
});
