export class Forecast {
  constructor(
    public datetime: number = new Date().getTime(),
    public mainTemp: number,
    public windSpeed: number,
    public weatherDescription: number,
  ) { }
}
