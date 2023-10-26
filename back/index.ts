import express from 'express';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv'
import cors from 'cors';

import { UserRouter } from '@routes';

dotenv.config();

const createServer = (): express.Express => {
  const app = express();

  app.use(cors())

  app.use(express.json({ limit: '1mb' }));

  app.use('/api/user', UserRouter);

  return app;
};

export default createServer;
