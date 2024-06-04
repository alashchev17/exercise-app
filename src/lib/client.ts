import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/generated/graphql";

const client = new GraphQLClient(process.env.API_ENDPOINT!);
export const sdk = getSdk(client);
