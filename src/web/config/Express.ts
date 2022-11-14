import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import routes from "@web/routes/index";
import swaggerSpec from "@web/utils/swagger";
import swaggerUi from "swagger-ui-express";
// import { DbContext } from "@data-layer/DbContext";

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
    this.app.use("/api/v1", routes);
    this.setupSwagger();
    this.app.use(this.unmatchedRoutesHandlder);
  }

  //   async connectDB() {
  //     await this.dbContext.connect();
  //   }

  setupSwagger() {
    this.app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.app.get("/api/v1/docs.json", (req: Request, res: Response) => {
      res.setHeader("Content-Types", "application/json");
      res.send(swaggerSpec);
    });
  }

  unmatchedRoutesHandlder(req: Request, res: Response) {
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
