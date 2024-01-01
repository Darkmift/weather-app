import { IForecast } from '../../../types/forecast';

export const forecastCelsius: IForecast = {
  Headline: {
    EffectiveDate: '2023-12-31T01:00:00+02:00',
    EffectiveEpochDate: 1703977200,
    Severity: 7,
    Text: 'Mild late Saturday night',
    Category: 'heat',
    EndDate: '2023-12-31T07:00:00+02:00',
    EndEpochDate: 1703998800,
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2023-12-30T07:00:00+02:00',
      EpochDate: 1703912400,
      Temperature: {
        Minimum: {
          Value: 13.8,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 22.7,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
    },
    {
      Date: '2023-12-31T07:00:00+02:00',
      EpochDate: 1703998800,
      Temperature: {
        Minimum: {
          Value: 12.5,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.9,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2024-01-01T07:00:00+02:00',
      EpochDate: 1704085200,
      Temperature: {
        Minimum: {
          Value: 14.4,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 7,
        IconPhrase: 'Cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2024-01-02T07:00:00+02:00',
      EpochDate: 1704171600,
      Temperature: {
        Minimum: {
          Value: 14.2,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.3,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2024-01-03T07:00:00+02:00',
      EpochDate: 1704258000,
      Temperature: {
        Minimum: {
          Value: 12.9,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
    },
  ],
};

export const forecastFahrenheit: IForecast = {
  Headline: {
    EffectiveDate: '2024-01-02T07:00:00+02:00',
    EffectiveEpochDate: 1704171600,
    Severity: 5,
    Text: 'Expect showery weather Tuesday morning through late Tuesday night',
    Category: 'rain',
    EndDate: '2024-01-03T07:00:00+02:00',
    EndEpochDate: 1704258000,
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2023-12-31T07:00:00+02:00',
      EpochDate: 1703998800,
      Temperature: {
        Minimum: {
          Value: 53.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 70.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
    },
    {
      Date: '2024-01-01T07:00:00+02:00',
      EpochDate: 1704085200,
      Temperature: {
        Minimum: {
          Value: 56.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 70.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 7,
        IconPhrase: 'Cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
    },
    {
      Date: '2024-01-02T07:00:00+02:00',
      EpochDate: 1704171600,
      Temperature: {
        Minimum: {
          Value: 58.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 68.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: 'Partly sunny w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Night: {
        Icon: 40,
        IconPhrase: 'Mostly cloudy w/ showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
    },
    {
      Date: '2024-01-03T07:00:00+02:00',
      EpochDate: 1704258000,
      Temperature: {
        Minimum: {
          Value: 54.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 68.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 8,
        IconPhrase: 'Dreary',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
    },
    {
      Date: '2024-01-04T07:00:00+02:00',
      EpochDate: 1704344400,
      Temperature: {
        Minimum: {
          Value: 57.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 69.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
    },
  ],
};
