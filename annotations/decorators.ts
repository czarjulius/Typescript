class Boat{
  color: string = 'red'

  get formarttedColor(): string{
    return `This boat color is ${this.color}`
  }

  @logError('Oops, Boat was sunk into the ocean')
  pilot():void{
    throw new Error();
    console.log('swish');
    
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor):void{
    const method = desc.value;
  
    desc.value = function(){
      try {
        method()
      } catch (error) {
        console.log(errorMessage);
        
      }
    }
  }
}


new Boat().pilot()