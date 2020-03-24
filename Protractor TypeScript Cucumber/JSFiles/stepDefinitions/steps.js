"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
//create an object of calculator Page object
let calc = new calculator_1.calculator();
let homePage = new angularHomePage_1.angularHomePage;
cucumber_1.Given('I will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJS") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('i add two number {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
    yield calc.go.click();
}));
cucumber_1.Then('output should be displayed as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.getResults.getText().then(function (value) {
        var expect = chai_1.default.expect;
        expect(value).to.equal(string);
    });
}));
cucumber_1.When('i clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield homePage.link.click();
    protractor_1.browser.sleep(3000);
}));
cucumber_1.When('i will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('enter text {string} in seacrh box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield homePage.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWtEO0FBQ2xELDBEQUF1RDtBQUN2RCxvRUFBaUU7QUFDakUsZ0RBQXlCO0FBRXpCLDRDQUE0QztBQUU1QyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLFFBQVEsR0FBRSxJQUFJLGlDQUFlLENBQUE7QUFDakMsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELElBQUcsTUFBTSxJQUFHLE1BQU0sRUFBQztRQUNmLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUNuRTtTQUFLLElBQUksTUFBTSxJQUFHLFdBQVcsRUFDOUI7UUFDSSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDL0M7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3JFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMxQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztRQUNoRCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDeEMsb0VBQW9FO0lBQ3BFLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtJQUMvQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDdkQsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=