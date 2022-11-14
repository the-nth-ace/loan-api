import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ace's TS-Express Template",
      version: "1.0.0",
    },
    components: {
      securitySchemas: {
        beararAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/web/routes/index.ts", "./src/web/routes/example.routes.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
