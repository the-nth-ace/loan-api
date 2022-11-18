import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import routes from "../routes";
import { container, Lifecycle } from "tsyringe";
import { IUserRepository, TestUserRepository } from "Domain/auth";
// import { DbContext } from "@domain/DbContext";

const health = require("express-ping");

export class ExpressConfig {
  app: express.Express;

  //   dbContext: DbContex;
  constructor() {
    // this.dbContext = Container.get(DbContext);
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(health.ping());
    this.app.use(helmet());
    this.registerContainer();
    this.app.use("/api/v1", routes);
    this.app.use(this.unmatchedRoutesHandler);
  }

  /*
   * register tokens for DI container
   */
  registerContainer() {
    container.register<IUserRepository>(
      "UserRepository",
      {
        useClass: TestUserRepository,
      },
      {
        lifecycle: Lifecycle.Singleton,
      }
    );
  }
  //   async connectDB() {
  //     await this.dbContext.connect();
  //   }

  unmatchedRoutesHandler(req: Request, res: Response) {
    res.status(404).json({
      error: {
        name: "Error",
        status: 404,
        message: "Invalid Request",
        statusCode: 404,
      },
      message: "Invalid Request!",
    });
  }
}
