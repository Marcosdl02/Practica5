import { ApolloServer } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutations.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@8.0.1";


// Conexion a MongoDB
await mongoose.connect("mongodb+srv://Marcos:12345@nebrija-cluster.7yxmiyx.mongodb.net/ComicsDB?retryWrites=true&w=majority");
console.info("Conexion con Mongo realizada")

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

const { url } = await startStandaloneServer(server);
console.info(`Server ready at ${url}`);
