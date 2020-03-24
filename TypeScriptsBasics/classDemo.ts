export class classDemo{

    //properties
    //methods
    //costructor

    //thin line difference between properties and variables
    //when we define inside the properties inside the class it treated as properties

    username:string;
    password:String;
    ssn:number;

    //method
    getUsername(){
        return this.username; //username of the class
    }

    setUsername(){
        this.username="ashwini";
    }

    
    getSSN(){
        return this.ssn;
    }
    
    //constructoe

    // constructor(){
    //     console.log("i will be first");
    // }

    //parameterized constuctr

    constructor(ssn:number){
        this.ssn=ssn;
    }

}

//accesss a member sof the class

//create object of the class using that obejct ,call the method and properties present in the class

 let l= new classDemo(123);
 l.setUsername();
console.log(l.getUsername());
console.log(l.getSSN());