export interface IAPICity {
  current: object,
  current_units: object,
  elevation: number,
  generationtime_ms: number,
  hourly: object,
  hourly_units: object,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation:string,
  utc_offset_seconds: number,
}

export type TAPICities = { value: IAPICity[] }
