import {Before, After, Status} from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser } from "protractor";


Before({tags: "@calculatorTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    browser.manage().window().maximize();

  });
  
  Before({tags: "@angularTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("i am execution");
  });
  

  After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("test is completed");
    if(scenario.result.status=== Status.FAILED){
      //code to take screenshot
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot,"image/png")
    }
  });
  