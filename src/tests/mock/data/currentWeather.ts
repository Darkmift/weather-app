import { ICurrentWeather } from '../../../types/currentWeather';

const currentWeather: ICurrentWeather[] = [
  {
    LocalObservationDateTime: '2023-12-31T03:37:00+02:00',
    EpochTime: 1703986620,
    WeatherText: 'Some clouds',
    WeatherIcon: 36,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 15.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 60.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Cool',
      },
      Imperial: {
        Value: 60.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Cool',
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Cool',
      },
      Imperial: {
        Value: 60.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Cool',
      },
    },
    RelativeHumidity: 70,
    IndoorRelativeHumidity: 52,
    DewPoint: {
      Metric: {
        Value: 9.8,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 50.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 68,
        Localized: 'ENE',
        English: 'ENE',
      },
      Speed: {
        Metric: {
          Value: 4.7,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 2.9,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 11.7,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 7.3,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: 'km',
        UnitType: 6,
      },
      Imperial: {
        Value: 10.0,
        Unit: 'mi',
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: '',
    CloudCover: 72,
    Ceiling: {
      Metric: {
        Value: 9144.0,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 30000.0,
        Unit: 'ft',
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1019.6,
        Unit: 'mb',
        UnitType: 14,
      },
      Imperial: {
        Value: 30.11,
        Unit: 'inHg',
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: 'Falling',
      Code: 'F',
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: 0.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 1.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 18.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 65.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 15.6,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 60.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 12.4,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 54.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbGlobeTemperature: {
      Metric: {
        Value: 13.3,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 56.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0.0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 14.2,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 58.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 15.8,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 60.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 14.2,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 58.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 22.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 72.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 14.1,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 57.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 22.7,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 73.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
    },
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
];

export default currentWeather;
