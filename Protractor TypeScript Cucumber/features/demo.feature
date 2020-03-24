Feature: 'I am validating calculator app'

@calculatorTesting
Scenario Outline: 'calc add functionality'

Given I will navigate to "calc" page
When i add two number "<key1>" and "<key2>"
Then output should be displayed as "<key3>"
Examples:
| key1 | key2  | key3 |
| 3    | 5     | 6 |
| 2    |  7    | 9 | 

@angularTesting
Scenario Outline: 'abgular website functionality'

Given I will navigate to "AngularJS" page
When i clicked on header link
And i will navigate to angular page 
Then enter text "<key>" in seacrh box

Examples:
| key | 
| hello | 
| hi  | 