import http from 'http';
import { config } from 'dotenv';
import express from 'express';
import { addAliases } from 'module-alias';
config();
addAliases({
  '@core': `${__dirname}/core`,
  '@post': `${__dirname}/post`,
  '@root': `${__dirname}`
});
import AppConfig from '@core/app';
import { router } from '@post/routes/post.routes';

const serverPort: any = process.env.APP_PORT;

async function init(): Promise<void> {
  const app: express.Express = await AppConfig.catch((error) => {
    throw error;
  });

  app.use(express.json());

  app.get('/hi', (_req, res) => {
    const msg = `Hi people put your hands up!`;
    console.log(`${msg} ${process.env.TEST}`);
    console.log(`${msg} ${new Date().toUTCString()}`);
    res.send(`${msg} ${new Date().toUTCString()}`);
  });

  //routes
  app.use('/api/v1/posts', router);

  const server: http.Server = http.createServer(app);
  server.listen(serverPort, () => {
    console.log(`Server running on port ${serverPort}`);
  });
}
init().catch((error) => console.log(error));
