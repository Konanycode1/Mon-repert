import * as mongoose from 'mongoose';
import { env } from './env.validation';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(env.DATABASE_URL),
  },
];
