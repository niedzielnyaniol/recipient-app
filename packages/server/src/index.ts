import 'reflect-metadata';
import { createConnection } from 'typeorm';

import server from './graphql';

createConnection().then(() => {
  // tslint:disable-next-line no-console
  server.start(() => console.log('Server is running on localhost:4000'));
})
