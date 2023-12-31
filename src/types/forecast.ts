export interface IForecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
  Date: Date | string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Day;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

export interface Temperature {
  Minimum: Imum;
  Maximum: Imum;
}

export interface Imum {
  Value: number;
  Unit: 'C' | 'F';
  UnitType: number;
}

export interface Headline {
  EffectiveDate: Date | string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: Date | string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}
