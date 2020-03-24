import {browser} from "protractor";
import {element} from "protractor";
import {by} from "protractor"
//import {browser,element,by} from "protractor"

describe('Chain locators demo',  ()=> {

	it('Open Angular Website', async ()=> {

		await browser.get('https://juliemr.github.io/protractor-demo/');
		await element(by.model("first")).sendKeys("3")
		await element(by.model("second")).sendKeys("5")
		await element(by.id("gobutton")).click()

		//repeater 
		//chain locators
		//css for identical tags
		expect(element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()).toEqual("8")
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text)
		})

    })
    
    it('open angular website',async()=>{
   await browser.get("https://angularjs.org/");
   await element(by.linkText("angular.io")).click();
   await element(by.css("input[type='search']")).sendKeys("anular test");

    })
})