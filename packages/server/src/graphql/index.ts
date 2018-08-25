import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolver.*"));
const resolvers = mergeResolvers(resolversArray);

const typesArray = fileLoader(path.join(__dirname, './**/*.type.*'));
const typeDefs = mergeTypes(typesArray, { all: true });

export default new GraphQLServer({ typeDefs, resolvers });
