import { GraphQLClient } from "graphql-request";
const endpoint = "https://countries.trevorblades.com/";

export const client = new GraphQLClient(endpoint);
