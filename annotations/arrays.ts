const carMakers = ['ford', 'toyota', 'chevy']
const date = [new Date(), new Date()]
const carsByMake = [['f150'], ['corolla', ['camaro']]]

carMakers.map((maker: string) => {
  return maker.toUpperCase()
})

const importantDates: (Date | string)[] = [new Date()]
importantDates.push('20-11-11')
importantDates.push(new Date())