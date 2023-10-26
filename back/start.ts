import { Request } from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import cors from 'cors';

import createServer from '.';

const app = createServer();

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);

app.listen(8000, () => {
  console.log('server started');
  console.log(process.env.MONEY_DB);
});
