import { Forecast } from './forecast';

export class City {
  constructor(
    public id: number,
    public name: string,
    public forecast: Forecast = null,
  ) { }
}
