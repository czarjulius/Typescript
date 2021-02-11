class HoldNumber{
   data: number;
}
const newNumber = new HoldNumber()

class HoldString{
   data: string;
}

const newString = new HoldString()


class HoldAnything<T>{
   data: T;
}

const newHoldAnything = new HoldAnything<number>()
