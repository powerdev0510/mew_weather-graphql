const { 
  GraphQLObjectType, 
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema 
} = require('graphql');
const { fetchWeather } = require('../service');

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: () => ({
    temperature: { type: GraphQLFloat },
    minTemperature: { type: GraphQLFloat },
    maxTemperature: { type: GraphQLFloat },
    wind: { type: GraphQLFloat },
    description: { type: GraphQLString },
    icon: { type: GraphQLString },
    pressure: { type: GraphQLFloat },
    humidity: { type: GraphQLFloat },
    sunrise: { type: GraphQLInt },
    sunset: { type: GraphQLInt }

  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    weather: { 
      type: WeatherType,
      resolve(parent, args) {
        return fetchWeather();
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});