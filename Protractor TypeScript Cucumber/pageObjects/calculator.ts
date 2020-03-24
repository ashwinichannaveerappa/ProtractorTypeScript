import { ElementFinder, element, by } from "protractor"

export class calculator {

    firstEditBox : ElementFinder;
    secondEditBox : ElementFinder;
    go:ElementFinder;
    getResults:ElementFinder;
    constructor() {
        this.firstEditBox = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.go =element(by.id("gobutton"));
        this.getResults=element(by.repeater("result in memory"));
        
    }

}