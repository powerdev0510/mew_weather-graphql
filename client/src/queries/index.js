import { gql } from '@apollo/client';

export const weatherQuery = gql`
  query GetWeather{
    weather {
      description,
      temperature,
      minTemperature,
      maxTemperature,
      wind,
      description,
      icon,
      pressure,
      humidity,
      sunrise,
      sunset
    }
  }
`;
