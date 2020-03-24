import { calculator } from "./pageObjects/calculator"
import { element, by, browser } from "protractor";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('validating the functionality of calculator', () => {

  it('addition functionality', async () => {
    let calc = new calculator();
    await browser.get('https://juliemr.github.io/protractor-demo/');
    await calc.firstEditBox.sendKeys("3")
    await calc.secondEditBox.sendKeys("5")
    await calc.go.click();
    await calc.getResults.getText().then(function (value) {
      console.log(value)
    })

  })
  it('angular homePage', async () => {
    let homePage = new angularHomePage();
    await browser.get("https://angularjs.org/");
    await homePage.link.click();
    browser.sleep(3000);
    await homePage.search.sendKeys("asbd")

  })

})