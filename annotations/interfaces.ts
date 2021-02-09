const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `Name: ${this.name}`
  }
};

const drink1 = {
  color: 'brown',
  carbonate: true,
  sugar: 40,
  summary(): string{
    return `It has ${this.sugar} grams of sugar`
  }
}

interface Reportable{
  summary(): string
}

const printSummary = (item: Reportable): void=>{
  console.log(`Name: ${item.summary()}`);
}

printSummary(oldCivic)
printSummary(drink1)