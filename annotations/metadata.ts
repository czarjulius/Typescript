import 'reflect-metadata';

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('beauty', 'beauty is found in red', plane, 'color')
Reflect.defineMetadata('height', 10, plane)

const note = Reflect.getMetadata('note', plane)
const beauty = Reflect.getMetadata('beauty', plane, 'color')
const height = Reflect.getMetadata('height', plane)

console.log(note);
console.log(beauty);
console.log(height);

// Metadata with a decorator

@printMetadata
class Animal{
  sound: string = 'meeeeh'

  @markFunction('grass')
  move(){
    console.log('quikiti quikiti');
    
  }
}

function markFunction(foodInfo: string){
  return function(target: Animal, key: string){
    Reflect.defineMetadata('food', foodInfo, target, key)
  }
}
const foodInfo = Reflect.getMetadata('food', Animal.prototype, 'move')
console.log(foodInfo);

function printMetadata(target: typeof Animal){
  for (let key in target.prototype) {
    const food = Reflect.getMetadata('food', target.prototype, key)
    console.log(food);
    
  }
}