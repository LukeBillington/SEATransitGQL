export enum StopWheelchairBoardingEnum {
  "ACCESSIBLE",
  "NOT_ACCESSIBLE",
  "UNKNOWN"
}

export type StopWheelchairBoarding = keyof typeof StopWheelchairBoardingEnum;

export interface IStop {
  id: string;
  lat: string;
  lon: string;
  direction?: string;
  name: string;
  code?: string;
  locationType?: string;
  wheelchairBoarding?: StopWheelchairBoarding;
  routeIds: string[];
}
