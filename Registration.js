/**
 * @author Ashwini
 * @version 1.0
 * @description Registration Form 
 */

 	describe('Registartion form',function(){

	it('Open the angular website',function(){
	browser.get('https://rahulshettyacademy.com/angularpractice/');

	element(by.name("name")).sendKeys("ashwini1");
	element(by.css("input[name='email']")).sendKeys("ashwini1@gmail.com");
	element(by.id("exampleInputPassword1")).sendKeys("Testing");
	element(by.css("input[type='checkbox']")).click();

	//select from drop down using cssContainingText
	element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
	
	
	//select radio button when there is no unique id
	//all returns array of elements
	//we can select the desired object by using index
	//to click o first radio button
	element.all(by.name("inlineRadioOptions")).first().click();
	
	element(by.buttonText("Submit")).click().then(function(){
		element(by.css("div[class*='success']")).getText().then(function(text){
			console.log(text)
		})
	})

	element.all(by.css("div[class='alert alert-danger']")).count().then(function(countvalue){
		console.log(countvalue)
		if(countvalue==0){
			console.log("No error messages")
		}else 
			element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
			console.log(text)
			console.log("Error message exist")
			})

	})
	element(by.name("name")).clear();
	element(by.name("name")).sendKeys("m").then(function(){
		element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
			console.log(text);
		})
	})
	})
	})