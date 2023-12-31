export interface ICurrentWeather {
  LocalObservationDateTime: Date | string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: null;
  IsDayTime: boolean;
  Temperature: ApparentTemperature;
  RealFeelTemperature: ApparentTemperature;
  RealFeelTemperatureShade: ApparentTemperature;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  DewPoint: ApparentTemperature;
  Wind: Wind;
  WindGust: WindGust;
  UVIndex: number;
  UVIndexText: string;
  Visibility: ApparentTemperature;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: ApparentTemperature;
  Pressure: ApparentTemperature;
  PressureTendency: PressureTendency;
  Past24HourTemperatureDeparture: ApparentTemperature;
  ApparentTemperature: ApparentTemperature;
  WindChillTemperature: ApparentTemperature;
  WetBulbTemperature: ApparentTemperature;
  WetBulbGlobeTemperature: ApparentTemperature;
  Precip1hr: ApparentTemperature;
  PrecipitationSummary: { [key: string]: ApparentTemperature };
  TemperatureSummary: TemperatureSummary;
  MobileLink: string;
  Link: string;
}

export interface ApparentTemperature {
  Metric: Imperial;
  Imperial: Imperial;
}

export interface Imperial {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase?: string;
}

export interface PressureTendency {
  LocalizedText: string;
  Code: string;
}

export interface TemperatureSummary {
  Past6HourRange: PastHourRange;
  Past12HourRange: PastHourRange;
  Past24HourRange: PastHourRange;
}

export interface PastHourRange {
  Minimum: ApparentTemperature;
  Maximum: ApparentTemperature;
}

export interface Wind {
  Direction: Direction;
  Speed: ApparentTemperature;
}

export interface Direction {
  Degrees: number;
  Localized: string;
  English: string;
}

export interface WindGust {
  Speed: ApparentTemperature;
}
