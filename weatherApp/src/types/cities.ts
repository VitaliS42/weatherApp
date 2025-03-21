// {name: 'Казань', latitude: 55.7887, longitude: 49.1221,},

export interface ICity {
    name: string,
    latitude: number,
    longitude: number,
}

export type TCitiesValues = { value: ICity[] }