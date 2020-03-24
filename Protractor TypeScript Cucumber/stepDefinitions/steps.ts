import { Given, When, Then } from "cucumber";
import { element, by, browser } from "protractor";
import { calculator } from "../pageObjects/calculator";
import { angularHomePage } from "../pageObjects/angularHomePage";
import  chai from "chai";

//create an object of calculator Page object

let calc = new calculator();
let homePage =new angularHomePage
Given('I will navigate to {string} page', async (string) =>{
    if(string =="calc"){
        await browser.get('https://juliemr.github.io/protractor-demo/');
    }else if (string =="AngularJS")
    {
        await browser.get("https://angularjs.org/");
    }
});

When('i add two number {string} and {string}', async (string, string2) => {
    await calc.firstEditBox.sendKeys(string)
    await calc.secondEditBox.sendKeys(string2)
    await calc.go.click();

});

Then('output should be displayed as {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.getResults.getText().then(function (value) {
        var expect = chai.expect;
        expect(value).to.equal(string);
    })
});



When('i clicked on header link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await homePage.link.click();
    browser.sleep(3000);
});
When('i will navigate to angular page', async () => {
    browser.sleep(3000);
});

Then('enter text {string} in seacrh box', async (string) => {
    await homePage.search.sendKeys(string)

});