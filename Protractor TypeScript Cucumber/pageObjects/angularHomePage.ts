import {browser,element,by, ElementFinder } from "protractor";

export class angularHomePage{

    link:ElementFinder;
    search:ElementFinder;

    constructor(){
        this.link= element(by.linkText("angular.io"));
        this.search= element(by.css("input[type='search']"));
    }

}