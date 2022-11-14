import { Router } from "express";
import ExampleController from "../controllers/example.controller";

const routes = Router();

/**
 * @openapi
 * /api/v1/example:
 *      tags:
 *          - Example
 *      get:
 *          description: Responds with the example get route
 *          responses:
 *              200:
 *                  description: Returns an empty array
 */
routes.get("/", ExampleController.index);

/**
 * @openapi
 * /api/v1/example/:id:
 *      tags: Example
 *      get:
 *          description: Responds with the example get route
 *          responses:
 *              200:
 *                  description: Returns an empty array
 *
 */
routes.get("/:id", ExampleController.get);

/**
 * @openapi
 * /api/v1/example:
 *      tags:
 *       - User
 *       - Example
 *      post:
 *          description: Responds with the example get route
 *          responses:
 *              200:
 *                  description: Returns an empty array
 *      summary: Example Post Request
 *      requestBody:
 *          required: true
 */
routes.post("/", ExampleController.create);

export default routes;
