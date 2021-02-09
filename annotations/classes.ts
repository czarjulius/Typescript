class Vehicle{
  constructor(public color: string){}
  drive(): void{
    console.log('Driving very fast');
  }
  
}

class Car1 extends Vehicle{
  constructor(public wheel: number, color: string){
    super(color)
  }
  drive(): void{
    console.log('Lowly we accelerate');
  }
  private honk():void{
    console.log('Beep');
  }
  makeHonk():void{
    this.honk()
  }
}
// const vehicle = new Vehicle();
// vehicle.drive()

const car1 = new Car1(3, 'red');
car1.drive()
car1.makeHonk()