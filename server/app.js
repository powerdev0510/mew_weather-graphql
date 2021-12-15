const express = require('express');
const http = require('http');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');


const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('Server is running on: ' + port);

