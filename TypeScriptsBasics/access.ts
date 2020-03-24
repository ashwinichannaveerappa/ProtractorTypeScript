import {classDemo} from './classDemo'

let cd = new classDemo(123)
cd.setUsername()
console.log(cd.getUsername());

function validate(value:string){
    console.log(value);
}

function validate1(value:number){
    console.log(value)
}

validate("helllllllllloooo")

export interface vehicle{
    color:string;
    engine:number;
    camera?:boolean;
}


var Bmw = {
    color: "red",
    engine: 100,
    camera: true
};

var xyz = {
    color: "black",
    engine: 500,
    camera: false
};

function validateCar(car:vehicle) {
    console.log(car.camera);
    console.log(car.engine);
}

validateCar(Bmw);
validateCar(xyz);
console.log(validate(2));

describe('angularjs homepage todo list', ()=> {
    it('should add a todo', ()=> {
     

    });
  });