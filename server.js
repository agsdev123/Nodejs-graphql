const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const connectDB = require("./config/config");

// Connect to MongoDB
connectDB()

// Create an Express app
const app = express();

// Define the GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing the API
  })
);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
