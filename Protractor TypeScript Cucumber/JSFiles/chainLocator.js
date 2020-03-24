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
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const protractor_3 = require("protractor");
//import {browser,element,by} from "protractor"
describe('Chain locators demo', () => {
    it('Open Angular Website', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield protractor_2.element(protractor_3.by.model("first")).sendKeys("3");
        yield protractor_2.element(protractor_3.by.model("second")).sendKeys("5");
        yield protractor_2.element(protractor_3.by.id("gobutton")).click();
        //repeater 
        //chain locators
        //css for identical tags
        expect(protractor_2.element(protractor_3.by.repeater("result in memory")).element(protractor_3.by.css("td:nth-child(3)")).getText()).toEqual("8");
        protractor_2.element(protractor_3.by.repeater("result in memory")).element(protractor_3.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
    }));
    it('open angular website', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_2.element(protractor_3.by.linkText("angular.io")).click();
        yield protractor_2.element(protractor_3.by.css("input[type='search']")).sendKeys("anular test");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5Mb2NhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2hhaW5Mb2NhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDJDQUFtQztBQUNuQywyQ0FBNkI7QUFDN0IsK0NBQStDO0FBRS9DLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRyxHQUFFLEVBQUU7SUFFcEMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQVEsRUFBRTtRQUVwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUV4QyxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN2RyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBRUEsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQyxHQUFPLEVBQUU7UUFDcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVyRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==