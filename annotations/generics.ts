class ArrayOfNumbers{
   constructor(public collection: number[]){}
 
   get(index: number): number{
     return this.collection[index]
   }
 }
 
 class ArrayOfStrings{
   constructor(public collection: string[]){}
 
   get(index: number): string{
     return this.collection[index]
   }
 }

 class ArrayOfAnything<T>{
    constructor(public collection: T[]){}

    get(index: number): T{
       return this.collection[index]
    }
 }

 const arr = new ArrayOfAnything<string>(['a','d','t','o'])

 // Generics with functions

 function printStrings(arr: string[]): void{
    for (const string of arr) {
       console.log(string);
       
    }
 }

 function printNumbers(arr: number[]): void{
    for (const num of arr) {
       console.log(num);
       
    }
 }

 function printAnything<T>(arr: T[]): void{
    for (const anything of arr) {
       console.log(anything);
       
    }
 }

 printAnything<number>([1,2,3,4,5,6])

 //Generic Constraints

 class Car{
    print(){
       console.log('I am a car');
       
    }
 }
 class House{
    print(){
       console.log('I am a house');
       
    }
 }

 interface Printable{
    print(): void;
 }

 function printHousesOrCars<T extends Printable>(arr: T[]):void{
    for (const item of arr) {
       item.print()
    }

 } 

 printHousesOrCars<House>([new House(), new House()])
 printHousesOrCars<Car>([new Car(), new Car()])