let apples: number = 10;
const hasName: boolean = true
const speed: string = 'fast'
const nothingMuch: null = null
const nothing: undefined = undefined

//built in objects
const now: Date = new Date()

//Array

const colors: string[] = ['red','blue','white','black']
const numArray: number[] = [1,2,3]
const boolArray: boolean[] = [true,false,true]

//Classes

class Car{

}

let car: Car = new Car()

//Object literal

let point:{x: number; y: number} = {x:3, y:4}

// Function

let logNumber:(i:number)=>void = (i: number)=>{
  console.log(i);
  
}

let json = '{"x":10, "y":20}'
let coordinates: {x: number; y: number} = JSON.parse(json)
coordinates = {x: 10, y: 9} 

// Variables whose type cannot be inferred orrectly

let number = [-3, -2, 9]
let numberAboveZero: boolean | number = false;
for (let index = 0; index < number.length; index++) {
  if (number[index] > 0) {
    numberAboveZero = number[index]
  }  
}