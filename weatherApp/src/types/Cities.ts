export interface ICity {
  name: string,
  latitude: number,
  longitude: number,
}

export type TCitiesValues = { value: ICity[] }


export interface ICityForecast {
  name: string,
  current: object,
  hourly: object,
}
