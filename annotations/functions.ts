const divide = (a: number, b: number): number =>{
  return a/b
}
const forcast = {
  date: new Date(),
  weather:'sunny'
}
const logWeather = ({date, weather}:{date: Date; weather: string}): void =>{
  console.log(date);
  console.log(weather);
  

}