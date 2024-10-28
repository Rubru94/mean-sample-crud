import cors from 'cors';
import { config } from 'dotenv';
import express, { json, text, urlencoded } from 'express';
import httpContext from 'express-http-context';
import { connectToDatabase } from './config/db.config';

config();

class AppConfig {
  private app: express.Express | undefined;

  public async start(): Promise<express.Express> {
    try {
      this.app = express();
      this.app.use(httpContext.middleware);

      /**
       * @info config
       */
      this.config();

      /**
       * @info Database connection
       */
      connectToDatabase();

      /**
       * @info error handling
       */

      return this.app;
    } catch (error) {
      throw error;
    }
  }

  private config(): void {
    this.app.use(json({ limit: '1mb' }));
    this.app.use(text({ type: 'text/html' }));
    this.app.use(cors());
    this.app.use(urlencoded({ extended: false }));
    this.app.disable('x-powered-by');
  }
}

export default new AppConfig().start();
