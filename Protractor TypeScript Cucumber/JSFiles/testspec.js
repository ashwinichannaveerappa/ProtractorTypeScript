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
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./pageObjects/calculator");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('validating the functionality of calculator', () => {
    it('addition functionality', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        yield calc.getResults.getText().then(function (value) {
            console.log(value);
        });
    }));
    it('angular homePage', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new angularHomePage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield homePage.link.click();
        protractor_1.browser.sleep(3000);
        yield homePage.search.sendKeys("asbd");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUFxRDtBQUNyRCwyQ0FBa0Q7QUFDbEQsbUVBQWdFO0FBRWhFLFFBQVEsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLEVBQUU7SUFFMUQsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEdBQVMsRUFBRTtRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXhDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSixDQUFDLENBQUMsQ0FBQSJ9