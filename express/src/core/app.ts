import { config } from 'dotenv';
import express from 'express';
import httpContext from 'express-http-context';
import { connectToDatabase } from './config/db.config';

config();

class AppConfig {
  private app: express.Express | undefined;

  public async bootstrap(): Promise<express.Express> {
    try {
      this.app = express();
      this.app.use(httpContext.middleware);

      /**
       * @info Database connection
       */
      connectToDatabase();

      /**
       * @info config
       */

      /**
       * @info error handling
       */

      return this.app;
    } catch (error) {
      throw error;
    }
  }
}

export default new AppConfig().bootstrap();
